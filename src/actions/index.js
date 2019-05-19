const booksLoaded = (newBooks) =>{
    return {
        type: 'FETCH_BOOKS_REQUEST',
        payload: newBooks,
    };
};
const booksRequested = () =>{
    return {
        type: 'FETCH_BOOKS_SUCCESS'
    };
};
const booksError = (error) =>{
    return {
        type: 'FETCH_BOOKS_FAILURE',
        payload:error
    };
};
const bookAddedToCart = (idBook) =>{
    return {
        type: 'BOOK_ADDED_TO_CART',
        idBook
    };
};
const bookRemovedFromCart = (idBook) =>{
    return {
        type: 'BOOK_REMOVED_FROM_CART',
        idBook
    };
};
const allBookRemovedFromCart = (idBook) =>{
    return {
        type: 'ALL_BOOKS_REMOVED_FROM_CART',
        idBook
    };
};


const fetchBooks = (dispatch,bookstoreService) => () => {
    dispatch(booksRequested());
    bookstoreService.getBook()
        .then(data=>dispatch(booksLoaded(data)))
        .catch((err)=> dispatch(booksError(err)))
};

export {
    fetchBooks,
    bookAddedToCart,
    bookRemovedFromCart,
    allBookRemovedFromCart
};