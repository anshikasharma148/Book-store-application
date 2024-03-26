import React, { useEffect, useState } from "react";
import "./ProductListing.css";
import ProductListingCard from "./cards/product-listing-card/ProductListingCard";

export default function ProductListing() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div>
      <ProductListingCard
        headline="Here are some Engineering books that you might like"
        books={books}
      />
    </div>
    // <div className="product-listing-container">
    //   <div className="container">
    //     <h2>
    //       Here are some <span className="text-primary">Engineering books</span>{" "}
    //       that you might like
    //     </h2>

    //     <div className="listing-container">
    //       <ProductListingCard books={books} />
    //     </div>
    //   </div>
    // </div>
  );
}
