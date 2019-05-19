import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './header.css';

const Header = ({ numItems, total }) => {
    return (
        <div className = "shop-header row">
            <Link to = "/" className="shop-header__logo text-dark">ReStore</Link>
            <Link to = "/cart/" className="shop-header__cart"><i className="cart-icon fa fa-shopping-cart" />{ numItems } items ({total} р.)</Link>
        </div>    
    );
}

const mapStateToProps = ({ cartList }) => {
    return{
        numItems: cartList.countTotal,
        total:cartList.orderTotal
    }
}

export default connect(mapStateToProps)(Header);