import updateBookList from './book-list';
import updateCartList from './cart-list';

const reducer = (state, action)=>{      
    return {
        bookList:updateBookList(state, action),
        cartList:updateCartList(state, action)
    }
}

export default reducer;