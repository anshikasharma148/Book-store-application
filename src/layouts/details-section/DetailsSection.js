import React from 'react'
import './detailsSection.css'
import BookDetailImg from '../../assets/books/dsa.png'

export default function DetailsSection() {
  return (
    <section className='detail-section-container'>
        <div className="container">
            <div className="flex-container">
                <div className="book-img-container">
                    <img src={BookDetailImg} alt="book" />
                </div>
                <div className="book-detail-container">
                    <h2>Data Structures and Algorithms  </h2>
                    <p className='author'>Narsimha karumanchi</p>
                    <p className='book-description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam laudantium animi accusantium ipsum culpa maiores possimus at expedita omnis molestiae, atque dolor, eius nihil quisquam optio aut quod consectetur? Reprehenderit.</p>
                    <p> <b>Language</b> : English</p>
                    <p><b>Book Length</b> : 400 pages</p>
                    <h3><b>Price : </b>&#8377; 400</h3>

                    <a href="#" className='cart-button'>Add to Cart</a>
                </div>
            </div>
        </div>
    </section>
  )
}
