import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from '../actions/types'

function cartReducer(state, action) {
    switch (action.type) {
        case ADD_TO_CART: {
            alert('Your product added to cart Successfully')
            return {
                cart: [
                    ...state.cart,
                    {
                        product: action.productInfo,
                        quantity: action.quantity
                    }
                ]
            }

        }

        case REMOVE_FROM_CART: {
            const newCart = { ...state };
            newCart.cart.splice(action.index, 1);
            alert('Your product deleted from cart Successfully')
            return newCart;
        }

        case CLEAR_CART: {
            const newCart = { ...state };
            newCart.cart = [];
            alert('Your Order Placed Successfully')
            return newCart;
        }

        default:
            return state
    }
}

export default cartReducer