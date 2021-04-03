import React from 'react'

function CartItem(props) {
    return (
        <div className="card" >
            <img src={props.product.image} style={{ width: '90%', margin: '1% auto' }} className="card-img-top" alt="..." />
            <div className="card-body">
                <h4 className="card-title">{props.product.name}</h4>
                <p className="card-text">Price : ${props.product.price}</p>
                Quantity : 1 <br />
                Total : ${props.product.price} <br /><br />
                <a href='#' className="btn btn-danger">
                    <i className='fa fa-trash'></i> Delete</a>
            </div>
        </div>
    );
}

export default CartItem