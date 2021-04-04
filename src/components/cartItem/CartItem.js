import React from 'react'
import { connect } from 'react-redux'
import { removeFromCart } from '../../store/actions/actions'

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
                <button className="btn btn-danger" onClick={() => props.removeFromCart(props.index)}>
                    <i className='fa fa-trash'></i> Delete</button>
            </div>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeFromCart: (index) => dispatch(removeFromCart(index))
    }
}
export default connect(null, mapDispatchToProps)(CartItem)
