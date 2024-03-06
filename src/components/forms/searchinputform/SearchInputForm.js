import React from 'react'
import './searchinputform.css';


export default function SearchInputForm() {
  return (
    <div className='search-input-form-container'>
        <input type="text" className='search-input' placeholder='Search Books' />
        <button className='search-button'>Search</button>
    </div>
  )
}
