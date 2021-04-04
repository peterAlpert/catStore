import { ADD_TO_CART } from '../actions/types'

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

        default:
            return state
    }
}

export default cartReducer