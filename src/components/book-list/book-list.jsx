import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withBookstoreService } from '../hoc';
import ErrorIndicator from '../error-indicator';
// import * as actions from '../../actions';
import { fetchBooks, bookAddedToCart } from '../../actions';
import { compose } from '../../utils';
import BookListItem from '../book-list-item';
import './book-list.css';
import Spinner from '../spinner'

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

class BookListContainer extends Component{
    componentDidMount(){
        // const { 
        //     bookstoreService, 
        //     booksLoaded , 
        //     booksRequested,
        //     booksError 
        // } = this.props;
        // booksRequested();
        // bookstoreService.getBook()
        //     .then(data=>booksLoaded(data))
        //     .catch((err)=> booksError(err))        
        this.props.fetchBooks();//вынесли всю логику выше в отдельную функцию, которую обозначили в mapDispatchToProps
    }
    render(){
        const { books, loading , error, onAddedToCart } = this.props;
        if (loading){
            return <Spinner />
        }
        if (error){
            return <ErrorIndicator />
        }
        return <BookList books ={books} onAddedToCart={onAddedToCart}/>   
    };
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