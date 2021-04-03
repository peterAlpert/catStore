import React, { Component } from 'react'
import { getProductById } from '../api/products'

class Product extends Component {
    state = {
        product: {},
        quantity: 0
    };

    componentDidMount() {
        const id = this.props.match.params.id;
        getProductById(parseInt(id))
            .then((prod) => {
                this.setState({ product: prod })
            });
    }

    handleQty = (event) => {
        if (event.target.value < 0)
            return
        this.setState({ quantity: event.target.value })
    }

    render() {
        const product = this.state.product;
        const quantity = this.state.quantity;
        return (
            <div><br />
                <div className='row'>
                    <div className='col-6'>
                        <img src={product.image} style={{ width: '90%' }} />
                    </div>
                    <div className='col-6'>
                        <h1>{product.name}</h1>
                        <p>{product.price}$</p>
                        <p>{product.description}</p><br />
                        <input type='number' value={quantity} onChange={this.handleQty} /> <br />
                        <p>Total : {quantity * product.price}</p><br />
                        <button className='btn btn-primary'>Add To Cart</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product