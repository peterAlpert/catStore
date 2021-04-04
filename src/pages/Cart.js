import React, { Component } from 'react'
import CartItem from './../components/cartItem/CartItem'
import { connect } from 'react-redux'

class Cart extends Component {

    render() {
        return (
            <div>
                <h1>Products</h1>
                <div className='row'>
                    {this.props.cartItems.map((item, index) =>
                        <div className='col-3' key={item.product.id}>
                            <CartItem item={item} index={index} />
                        </div>
                    )}
                </div><br />
                <h3>Total : {this.props.Total}$</h3>
                <button className='btn btn-primary w-100'>Pay</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.cart,
        Total: state.cart.reduce((total, item) => total + (item.quantity * item.product.price), 0)
    }
}
export default connect(mapStateToProps)(Cart)