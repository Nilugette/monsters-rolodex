import React from 'react'
import './search-box.styles.css'

const SearchBox = ( { placeholder, handleChange }) => {
    return (
        <input 
            className="search"
            type="text" 
            onChange={handleChange} 
            placeholder={placeholder} />
    )
    
}

export default SearchBox