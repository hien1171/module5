import {useEffect, useState} from "react";
import * as bookService from "../../../src/service/BookService";
import {Link} from "react-router-dom";

function BookList() {
   const [books,setBooks] =useState([]);
   const [titleSearch, setTitleSearch] = useState("");


    useEffect( () => {
        //call api
        getAllBook();

    }, [titleSearch]);


    const getAllBook = async (titleSearch) => {
        try {
            let temp = await bookService.findAll();
            setBooks(temp);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <>

            <input onChange={(evt) => setTitleSearch(evt.target.value)}/>
            <h1>Book list </h1>
            <table class="table table-striped">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Quantity</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {books?.map((item, index) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.quantity}</td>
                            <td>
                                <Link to={`/books/update/${item.id}`} class="btn btn-warning">Edit</Link>
                                <Link to={`/books/delete/${item.id}`} class="btn btn-danger">Remove</Link>
                            </td>
                        </tr>
                    )
                )}
                </tbody>
            </table>
        </>
    )

}

export default BookList;