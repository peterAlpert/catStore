import React from 'react'

function CartItem(props) {
    const product = props.item.product;
    return (
        <div className="card" >
            <img src={product.image} style={{ width: '90%', margin: '1% auto' }} className="card-img-top" alt="..." />
            <div className="card-body">
                <h4 className="card-title">{product.name}</h4>
                <p className="card-text">Price : {product.price}$</p>
                Quantity : {props.item.quantity} <br />
                Total : {product.price * props.item.quantity}$ <br /><br />
                <a href='#' className="btn btn-danger">
                    <i className='fa fa-trash'></i> Delete</a>
            </div>
        </div>
    );
}

export default CartItem