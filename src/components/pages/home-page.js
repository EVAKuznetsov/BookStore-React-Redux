import React from 'react';
import BookList from '../book-list';


const HomePage = ({books}) =>{
    return <BookList books = {books}/>            
}

export default HomePage;