import React from "react";
import { useState } from "react";
import './App.css';

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
                <h2 className='author'> {book.author}</h2>
                <h3 className='shortDescription'> {book.shortDescription}</h3>
                <p className='coverImage'> <img src={book.coverImageUrl} alt=""> </img> </p>
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