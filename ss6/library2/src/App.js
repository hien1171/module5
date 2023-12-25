
import './App.css';
import React from "react";
import {BookList} from "./component/book_management/BookList";
import {NavLink,Route, Routes} from "react-router-dom";
import {CreateBook} from "./component/book_management/CreateBook";
import {EditBook} from "./component/book_management/EditBook";
import {DeleteBook} from "./component/book_management/DeleteBook";

function App() {
    return (
        <>
            <Routes>
                <Route path="/ass2" element={<BookList/>}/>
                <Route path="/ass2/create" element={<CreateBook/>}/>
                <Route path="/ass2/edit/:id" element={<EditBook/>}/>
                <Route path="/ass2/delete/:id" element={<DeleteBook/>}/>
            </Routes>

        </>

    );
}

export default App;