import React, { Component } from 'react'
import CartItem from './../components/cartItem/CartItem'
import { connect } from 'react-redux'
import { clearCart } from '../store/actions/actions'

class Cart extends Component {

    render() {
        return (
            <div>
                <h1>Cart</h1>
                <div className='row'>
                    {this.props.cartItems.map((item, index) =>
                        <div className='col-6 col-md-4 col-lg-3' key={index}>
                            <CartItem item={item} index={index} />
                        </div>
                    )}
                </div><br />
                <h3>Total : {this.props.Total}$</h3>
                <button className='btn btn-lg btn-primary w-100 mb-4' onClick={this.props.clearCart}>Place Order</button>
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

const mapDispatchToProps = (dispatch) => {
    return {
        clearCart: () => dispatch(clearCart())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)