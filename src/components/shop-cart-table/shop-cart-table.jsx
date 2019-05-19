import React from 'react';
import { connect } from 'react-redux';
import { bookAddedToCart,bookRemovedFromCart, allBookRemovedFromCart } from '../../actions';

import './shop-cart-table.css';

const ShopCartTable = ({items, total, onIncrease, onDecrease, onDelete}) =>{
    const renderRow = (item,idx)=>{
        const { id, title, count, total } = item;
        return(
            <tr key = {id}>
                <td>{idx+1}</td>
                <td>{title}</td>
                <td>{count}</td>
                <td>{total} р.</td>
                <td>
                    <button className="btn btn-outline-danger" onClick={()=>onDelete(id)}><i className="fa fa-trash-o"></i></button>
                    <button className="btn btn-outline-success" onClick={()=>onIncrease(id)}><i className="fa fa-plus"></i></button>
                    <button className="btn btn-outline-warning" onClick={()=>onDecrease(id)}><i className="fa fa-minus"></i></button>
                </td>
            </tr>
        );
    };
    return(
        <div className = "shopping-cart-table">
            <h2>Ваш список книг</h2>
            <table className = "table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Книги</th>
                        <th>Колличество</th>
                        <th>Цена</th>
                        <th>Действия</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(renderRow)}
                </tbody>            
            </table>
            <div className="total">Total: {total} р.</div>
        </div>
    );
}

const mapStateToProps=({ cartList })=>{
    return{
        items: cartList.cartItems,
        total: cartList.orderTotal
    };
};

const mapDispatchToProps = {
        onIncrease: bookAddedToCart,
        onDecrease: bookRemovedFromCart,
        onDelete: allBookRemovedFromCart,
}
export default connect(mapStateToProps, mapDispatchToProps)(ShopCartTable);