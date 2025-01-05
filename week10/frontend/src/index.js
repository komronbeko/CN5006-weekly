import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FncDisplayBooks from "./DsplyBk_fncCompt";
import BookUpDateForm from "./BookUpdate";
import DeleteBook from "./Delete_Book";
import BookForm from "./AddBook";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FncDisplayBooks />} />
        <Route path="/edit/:id" element={<BookUpDateForm />} />
        <Route path="/Delete/:id" element={<DeleteBook />} />
        <Route path="/addbook" element={<BookForm />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
