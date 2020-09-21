import { constants } from '../constants'

const initialState = {
    cartItems: [],
    totalPrice: 0,
    totalCartCount: 0,
}

const updateCartItems = (id, price, cartItems, quantity) => {

    let newItems
    const itemIdx = cartItems.findIndex(item => item.id === id)

    const newItem = {
        ...cartItems[itemIdx],
        quantity: cartItems[itemIdx].quantity + quantity,
        price: cartItems[itemIdx].price + price / cartItems[itemIdx].quantity
    }

    if (newItem.quantity === 0) {
        newItems = [...cartItems.slice(0, itemIdx), ...cartItems.slice(itemIdx + 1)]
    } else {
        newItems = [...cartItems.slice(0, itemIdx), newItem, ...cartItems.slice(itemIdx + 1)]
    }

    return {
        newItems,
        totalCartCount: newItems.reduce((sum, item) => sum + item.quantity, 0),
        totalPrice: newItems.reduce((sum, item) => sum + item.price, 0)
    }
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {

        case constants.ADD_ITEM_TO_CART: {

            const payloadItem = action.payload
            const itemIdx = state.cartItems.findIndex(item => item.id === payloadItem.id)
            let newItems = []

            if (itemIdx !== -1) {
                const newItem = {
                    ...state.cartItems[itemIdx],
                    quantity: state.cartItems[itemIdx].quantity + 1,
                    price: state.cartItems[itemIdx].price + payloadItem.price
                }
                newItems = [...state.cartItems.slice(0, itemIdx), newItem, ...state.cartItems.slice(itemIdx + 1)]
            } else {
                newItems = [...state.cartItems, { ...payloadItem, quantity: 1 }]
            }

            return {
                ...state,
                cartItems: newItems,
                totalCartCount: newItems.reduce((sum, item) => sum + item.quantity, 0),
                totalPrice: newItems.reduce((sum, item) => sum + item.price, 0)
            }
        }

        case constants.REMOVE_ITEM_FROM_CART: {

            const newItems = state.cartItems.filter(item => item.id !== action.payload)

            return {
                ...state,
                cartItems: newItems,
                totalCartCount: newItems.reduce((sum, item) => sum + item.quantity, 0),
                totalPrice: newItems.reduce((sum, item) => sum + item.price, 0)
            }
        }

        case constants.INCREASE_ITEM_CART: {
            const { newItems, totalCartCount, totalPrice } = updateCartItems(action.payload.id, +action.payload.price, state.cartItems, +1)
            return {
                ...state,
                cartItems: newItems,
                totalCartCount: totalCartCount,
                totalPrice: totalPrice
            }
        }

        case constants.DECREASE_ITEM_CART: {
            const { newItems, totalCartCount, totalPrice } = updateCartItems(action.payload.id, -action.payload.price, state.cartItems, -1)
            return {
                ...state,
                cartItems: newItems,
                totalCartCount: totalCartCount,
                totalPrice: totalPrice
            }
        }

        case constants.CLEAR_CART: {
            return {
                ...state,
                cartItems: [],
                totalCartCount: 0,
                totalPrice: 0
            }
        }

        default: {
            return state
        }
    }
}

export default cartReducer