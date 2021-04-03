import React, { Component } from 'react'
import CartItem from './../components/cartItem/CartItem'
import { getProducts } from '../api/products'

class Cart extends Component {
    state = {
        products: []
    };

    componentDidMount() {
        getProducts()
            .then((data) => {
                this.setState({
                    products: data
                })
            });
    }

    render() {
        return (
            <div>
                <h1>Products</h1>
                <div className='row'>
                    {this.state.products.map(prod =>
                        <div className='col-3' key={prod.id}>
                            <CartItem product={prod} />
                        </div>
                    )}
                </div><br />
                <h3>Total : 1000$</h3>
                <button className='btn btn-primary w-100'>Pay</button>
            </div>
        );
    }
}

export default Cart