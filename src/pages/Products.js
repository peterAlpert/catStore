import React, { Component } from 'react'
import ProductItem from './../components/productItem'
import { getProducts } from '../api/products'

class Products extends Component {
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
                        <div className='col-4' key={prod.id}>
                            <ProductItem product={prod} />
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default Products