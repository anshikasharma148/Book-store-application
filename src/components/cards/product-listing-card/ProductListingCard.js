import React from 'react'
import './ProductListingCard.css'
import ProductImage from '../../../assets/books/oopswithcpp.jpg'


export default function ProductListingCard() {
  return (
    <>
        <div className="product-listing-card">
                    <div className="product-listing-img-container">
                        <img src= {ProductImage} alt="" style={{ width: '150px' }} />
                    </div>
                    <div className="product-listing-container" >

                        <h3>OOPS with C++</h3>
                        <p className='author'>E Balagurusamy</p>
                        <p className='pricing'> &#8377;495</p>
                        <a href="#" className='product-listing-button'>Add to Cart</a>
                    </div>

            </div>
    </>
  )
}
