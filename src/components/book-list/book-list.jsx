import React, { Component } from 'react';
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

class BookListContainer extends Component{
    state = {
        activePage:1,
        elemPerPage:2
    }
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
    togglePage = (activePage) =>{
        console.log(`page ${activePage}`);
        this.setState({activePage});
    }
    render(){
        const { books, loading , error, onAddedToCart } = this.props;
        const { elemPerPage,activePage } =  this.state;
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
                    activePage={this.state.activePage}
                    itemsCountPerPage={elemPerPage}
                    totalItemsCount={books.length}
                    pageRangeDisplayed={5}
                    onChange={this.togglePage}
                />
            </>   
        )
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