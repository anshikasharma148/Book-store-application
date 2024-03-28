import React from "react";
import "./ProductListingCard.css";
import "swiper/css";
import "swiper/css/effect-cards";
// import ProductImage from "../../../assets/books/oopswithcpp.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";

const ProductListingCard = ({ headline, books }) => {
  console.log(books);
  return (
    <>
      <div className="my-16 px-4 lg:px-24">
        <h2 className="text-5x1 text-center font-bold text-black my-5">
          {headline}
        </h2>
        <div>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper w-full h-full"
          >
            {books.map((book) => (
              <SwiperSlide key={book._id}>
                <Link to={`/book/${book._id}`}>
                  <div className="relative">
                    <img src={book.imageURL} />
                  </div>
                  <div>
                    <h3>{book.title}</h3>
                    <p>{book.author}</p>
                  </div>
                  <div>
                    <p>${book.price}</p>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* <div className="product-listing-card">
        <div className="product-listing-img-container">
          <img src={ProductImage} alt="" style={{ width: "150px" }} />
        </div>
        <div className="product-listing-container">
          <h3>OOPS with C++</h3>
          <p className="author">E Balagurusamy</p>
          <p className="pricing"> &#8377;495</p>
          <a href="#" className="product-listing-button">
            Add to Cart
          </a>
        </div>
      </div> */}
    </>
  );
};

export default ProductListingCard;
