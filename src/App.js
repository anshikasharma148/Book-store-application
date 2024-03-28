import React from "react";
import "./styles.css";

import Home from "./routes/Home";
import About from "./routes/About";
import Mycart from "./routes/Mycart";
import Contact from "./routes/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BooksPage from "./pages/bookspage/BooksPage";
// import BookDetailsPage from './pages/bookspage/bookdetailspage/BookDetails';
import SingleBook from "./pages/bookspage/SingleBook";
import Register from "./pages/RegisterPage/Register";
import Login from "./pages/LoginPage/Login";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Mycart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/books" element={<BooksPage />} />
          <Route
            path="/book/:id"
            element={<SingleBook />}
            loader={({ params }) =>
              fetch(`http://localhost:5000/book/${params.id}`).then(
                (response) => {
                  if (!response.ok) {
                    throw new Error("Failed to fetch book data");
                  }
                  return response.json();
                }
              )
            }
          />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
