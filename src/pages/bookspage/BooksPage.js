import React from 'react'
import Navbar from '../../components/Navbar'
import SearchInputForm from '../../components/forms/searchinputform/SearchInputForm'
import './BooksPage.css'


export default function BooksPage() {
  return (
    <section>
        <Navbar/>

        <div className='search-container'>
        <h2>Find the <span className='text-primary'>Books</span> that you want</h2>
            <SearchInputForm />
        </div>

    
        
    </section>
  )
}