import React from 'react'
import "./ProductListing.css"
import ProductListingCard from './cards/product-listing-card/ProductListingCard'



export default function ProductListing() {
  return (
    <div className="product-listing-container">
        <div className="container">
            <h2>Here are some <span className='text-primary'>Engineering books</span> that you might like</h2>

            <div className="listing-container">
                <ProductListingCard/>
                <ProductListingCard/>
                <ProductListingCard/>
                <ProductListingCard/>
                <ProductListingCard/>

                
            </div>
        </div>
        
    </div>
  )
}   