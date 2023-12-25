import axios from "axios";

export const findAll = async (titleSearch) => {
    try {
        let temp = await axios.get("http://localhost:8080/books" )
        // let temp=await  axios.get("http://localhost:8080/books?title_like="+titleSearch);
        return temp.data;
    } catch (e) {
        console.log(e)
    }

}


export const update = async (bookId, book) => {
    try {
        let response = await axios.patch(
            `http://localhost:8080/books/${bookId}`,
            book
        );
        return response.data;
    } catch (e) {
        console.log(e);
    }
};

export const deleteBook = async (bookId) => {
    try {
        let response = await axios.delete(`http://localhost:8080/books/${bookId}`);
        return response.data;
    } catch (e) {
        console.log(e);
    }
};