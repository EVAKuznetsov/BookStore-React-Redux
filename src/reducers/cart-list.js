const updateCartItem = (book,item={}, quantity) => {
    const { id = book.id, title = book.title, count = 0, total = 0} = item;
    return {
        id,
        title,
        count: count + quantity,
        total: total + quantity * book.price
    }
}
const updateOrderTotal = (book,orderTotal, quantity) => {
    return +orderTotal + quantity * book.price;    
}
const updateCountTotal = (countTotal, quantity) => {
    return +countTotal + quantity;    
}
const updateCartItems = (cartItems, item, idx) => {
    if (item.count === 0 ){
        return [
            ...cartItems.slice(0,idx),
            ...cartItems.slice(idx+1)
        ] 
    }
    if (idx===-1){
        return [
            ...cartItems,
            item
        ]
    }else{
        return [
            ...cartItems.slice(0,idx),
            item,
            ...cartItems.slice(idx+1)
        ]
    }
}

const updateOrder = (state, bookId, quantity) => {
    const { bookList:{books}, cartList:{cartItems,orderTotal,countTotal} } = state;
    const book = books.find((book)=>book.id===bookId);
    const indexItem = cartItems.findIndex(({id})=>id===bookId);
    const item = cartItems[indexItem];
    let newItem = updateCartItem(book,item,quantity);
    let newOrderTotal = updateOrderTotal( book,orderTotal,quantity );
    let newCountTotal = updateCountTotal( countTotal,quantity );
    return {
        cartItems:updateCartItems( cartItems, newItem, indexItem ),
        orderTotal: newOrderTotal,
        countTotal: newCountTotal
        
    }           
}
const updateCartList = (state, action) =>{
    if (state === undefined){
        return {
            cartItems:[],
            orderTotal: '0',
            countTotal: '0'
        };
    };
    switch (action.type){
        case 'BOOK_ADDED_TO_CART':
        return updateOrder(state, action.idBook, 1);

        case 'BOOK_REMOVED_FROM_CART':
            return updateOrder(state, action.idBook, -1);

        case 'ALL_BOOKS_REMOVED_FROM_CART':
            const item = state.cartList.cartItems.find(({id})=>id===action.idBook);
            return updateOrder(state, action.idBook, -item.count);

        default: return state.cartList;
    }
}

export default updateCartList;