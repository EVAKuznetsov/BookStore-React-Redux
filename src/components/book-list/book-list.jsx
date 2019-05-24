import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { withBookstoreService } from '../hoc';
import ErrorIndicator from '../error-indicator';
import Pagination from 'react-js-pagination';
// import Pagination from '../pagination';
import { fetchBooks, bookAddedToCart } from '../../actions';
import { compose } from '../../utils';
import BookListItem from '../book-list-item';
import './book-list.css';
import Spinner from '../spinner';


const BookList = ({books, onAddedToCart}) => {
    return(
        <ul className = "book-list">
            {books.map((book)=>{
                return(
                    <li key = {book.id}><BookListItem book={book} onAddedToCart={()=>onAddedToCart(book.id)} /></li>
                );
            })}
        </ul> 
    );
};

const BookListContainer = ({ books, loading , error, onAddedToCart, fetchBooks }) => {
    const [ activePage, setActivePage ] = useState(1);
    const [ elemPerPage ] = useState(2);
    useEffect(()=>{fetchBooks()},[]);
    const togglePage = (activePage) => setActivePage(activePage);

    if (loading){
        return <Spinner />
    }
    if (error){
        return <ErrorIndicator />
    }
    const indexOfLastTodo = activePage * elemPerPage;
    const indexOfFirstTodo = indexOfLastTodo - elemPerPage;
    const currentBooks = books.slice(indexOfFirstTodo, indexOfLastTodo);

    return (
        <>
            <BookList books ={currentBooks} onAddedToCart={onAddedToCart}/>
            <Pagination
                hideNavigation
                activePage={activePage}
                itemsCountPerPage={elemPerPage}
                totalItemsCount={books.length}
                pageRangeDisplayed={5}
                onChange={togglePage}
            />
        </>   
    )
};
const mapStateToProps=({bookList})=>{
    return {
        books:bookList.books,
        loading:bookList.loading,
        error: bookList.error
    };
};
// const mapDispatchToProps = actions;
const mapDispatchToProps = (dispatch,ownProps)=>{
    const { bookstoreService } = ownProps;
    return {
        fetchBooks: fetchBooks(dispatch,bookstoreService),//перенесли логику функции в actions   
        onAddedToCart: (id)=>dispatch(bookAddedToCart(id))    
    }
}

export default compose(withBookstoreService)(connect(mapStateToProps,mapDispatchToProps)(BookListContainer));