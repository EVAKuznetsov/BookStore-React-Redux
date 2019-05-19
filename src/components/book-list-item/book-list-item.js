import React from 'react';
// import { Link } from 'react-router-dom';
import './book-list-item.css';

const BookListItem =( { book, onAddedToCart } )=>{
    const { title, author, price,img} = book;
    return(
        <div className = "book">
            <div className="book__cover">
                <img src={img} className = "book__img" alt = {title} />
            </div>
            <div className="book__details">
                <span className="book__title">{title}</span>
                <div className="book__author">{author}</div>
                <div className="book__price">{price} р.</div>
                <button className="btn btn-info add-to-cart" onClick={onAddedToCart}>Добавить в карзину</button>
            </div>
        </div>
    );
}
export default BookListItem;