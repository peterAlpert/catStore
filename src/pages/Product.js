import React, { Component } from 'react'
import { getProductById } from '../api/products'
import { addToCart } from '../store/actions/actions'
import { connect } from 'react-redux'

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
                        <p>{product.description}</p>
                        <input type='number' value={quantity} onChange={this.handleQty} /> <br />
                        <p>Total : {quantity * product.price}</p>
                        <button className='btn btn-primary w-100' onClick={() => this.props.addToCart(product, quantity)}>Add To Cart</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (productInfo, quantity) => dispatch(addToCart(productInfo, quantity))
    }
}
export default connect(null, mapDispatchToProps)(Product)

