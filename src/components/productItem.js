import React from 'react'

function ProductItem(props) {
    return (
        <div className="card" >
            <img src={props.product.image} style={{ width: '90%', margin: '1% auto' }} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.product.name}</h5>
                <p className="card-text">Price : {props.product.price}$</p>
                <a href={"/products/" + props.product.id} className="btn btn-primary">Details</a>
            </div>
        </div>
    );
}

export default ProductItem