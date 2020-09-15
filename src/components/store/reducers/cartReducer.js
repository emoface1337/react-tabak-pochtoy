import { constants } from '../constants'

const initialState = {
    cartItems: []
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {

        case constants.ADD_ITEM_TO_CART: {
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload]
            }
        }

        case constants.REMOVE_ITEM_FROM_CART: {
            return {
                ...state,
                // cartItems: [...state.cartItems, action.payload]
            }
        }

        default: {
            return state
        }
    }
}

export default cartReducer