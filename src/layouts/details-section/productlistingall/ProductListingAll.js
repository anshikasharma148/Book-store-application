import React from 'react'
import './productListingAll.css'
import ProductListingCard from 'D:/Book-store-application/src/components/cards/product-listing-card/ProductListingCard'


export default function ProductListingAll() {
  return (
    <section className='product-listing-all-container'>
        <div className='container'>
            <div className="grid-container">
                <div className="grid-item">
                    <ProductListingCard/>
                </div>
                <div className="grid-item">
                    <ProductListingCard/>
                </div>
                <div className="grid-item">
                    <ProductListingCard/>
                </div>
                <div className="grid-item">
                    <ProductListingCard/>
                </div>
                <div className="grid-item">
                    <ProductListingCard/>
                </div>
                <div className="grid-item">
                    <ProductListingCard/>
                </div>
                <div className="grid-item">
                    <ProductListingCard/>
                </div>
                <div className="grid-item">
                    <ProductListingCard/>
                </div>
                <div className="grid-item">
                    <ProductListingCard/>
                </div>
                <div className="grid-item">
                    <ProductListingCard/>
                </div>
                <div className="grid-item">
                    <ProductListingCard/>
                </div>
                <div className="grid-item">
                    <ProductListingCard/>
                </div>
            </div>


        </div>
    </section>
  )
}
