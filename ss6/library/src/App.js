import logo from './logo.svg';
import './App.css';

import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";
import {BrowserRouter, Link, NavLink, Route, Routes} from "react-router-dom";

import {NotFound} from "./components/NotFound";
import BookList from "./components/books/BookList";
import BookCreate from "./components/books/BookCreate";
import BookUpdate from "./components/books/BookUpdate";
import React from "react";
import BookDelete from "./components/books/BookDelete";

function App() {
  return (
      <>
        <BrowserRouter>
          <NavLink to="/books/list">Danh sách</NavLink>
          <NavLink to="/books/create">Thêm mới</NavLink>
          <Routes>
            <Route path="books/list" element={<BookList/>}/>
            <Route path="books/create" element={<BookCreate/>}/>
            <Route path="books/update/:id" element={<BookUpdate/>}/>
            <Route path="books/delete/:id" element={<BookDelete/>}/>
            <Route path="*" element={<NotFound/>}></Route>
          </Routes>

          <ToastContainer/>
        </BrowserRouter>
      </>
  );
}

export default App;
