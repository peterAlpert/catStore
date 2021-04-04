import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/types'

function cartReducer(state, action) {
    switch (action.type) {
        case ADD_TO_CART: {
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
            delete newCart.cart[action.index];
            return newCart;
        }

        default:
            return state
    }
}

export default cartReducer