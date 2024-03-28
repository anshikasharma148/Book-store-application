import React from "react";
import "./styles.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Mycart from "./routes/Mycart";
import Contact from "./routes/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BooksPage from "./pages/bookspage/BooksPage";
// import BookDetailsPage from "./pages/bookspage/bookdetailspage/BookDetails";
import SingleBook from "./pages/bookspage/SingleBook";
export default function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Mycart />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/books" element={<BooksPage />} />
            {/* <Route path="/book-details/:id" element={<BookDetailsPage />} /> */}
            <Route
              path="/book/:id"
              element={<SingleBook />}
              loader={({ params }) =>
                fetch(`http://localhost:5000/book/${params.id}`)
              }
            />
          </Routes>
        </BrowserRouter>
        {/* <Home /> */}
      </div>
    </>
  );
}
