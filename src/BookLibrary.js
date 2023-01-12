import React from "react";
import { useState } from "react";
import './App.css';
import placeholder from "./logo.svg"

export const BookLibrary = ({ book }) => {
    const [expanded, setExpanded] = useState(false)

    const handleClick = () => {
        setExpanded(!expanded)
    }

    return(
        <div style={{ margin:'10px' }}>
        <div className='bookData'>
            <div>
                <h1 className='title'> {book.title}</h1>
                <h3 className='author'> {book.author}</h3>
                <p className='shortDescription'> {book.shortDescription}</p>
                <div className="img-container">
                        <img className="cover_art" 
                        src={book.coverImageUrl} alt="Book cover" onError={(e) => e.target.src = placeholder} />
                </div>
                <button onClick={() => handleClick()}>{expanded? 'Less' : 'More'} Information </button>

                {expanded ? <p>URL: {book.url}</p> : ''}
                {expanded ? <p>Publisher: {book.publisher}</p> : ''}
                {expanded ? <p>Publication Date: {book.publicationDate}</p> : ''}
                {expanded ? <p>Full Description: {book.detailedDescription}</p> : ''}
            </div>
        </div>
        </div>
    
    )
}