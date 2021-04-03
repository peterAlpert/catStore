import React from 'react'
import { Link } from 'react-router-dom'
import './CartIcon.css'

function CartIcon() {
    return (
        <div id='cart-icon'>
            <Link to='/cart'>
                <i className='fa fa-shopping-cart'></i>
                <span className='badge badge-danger'>3</span>
            </Link>
        </div>
    )
}

export default CartIcon