// import logo from './logo.svg';
import { books } from "./Books";
import { BookLibrary } from './BookLibrary';
import './App.css';
import React from 'react';

export const App = () => {
  return (
    <>
    <div className='book-detail'>
      {books.map((book, index) => (
        <BookLibrary book={book} key={index}/> 
        ))}

    </div>
    </>
  )
}

export default App;