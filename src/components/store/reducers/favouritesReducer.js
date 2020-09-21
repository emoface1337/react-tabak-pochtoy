import { constants } from '../constants'

const initialState = {
    favouriteItems: [],
    totalFavCount: 0
}

export const favouritesReducer = (state = initialState, action) => {
    switch (action.type) {

        case constants.ADD_ITEM_TO_FAVOURITES: {

            const newItem = action.payload
            const { id } = newItem
            const itemIdx = state.favouriteItems.findIndex(item => item.id === id)

            let newItems

            if (itemIdx !== -1) {
                newItems = [...state.favouriteItems.slice(0, itemIdx), ...state.favouriteItems.slice(itemIdx + 1)]
            } else {
                newItems = [...state.favouriteItems.slice(0, itemIdx), newItem, ...state.favouriteItems.slice(itemIdx + 1)]
            }

            const newItemsCount = newItems.length

            return {
                ...state,
                favouriteItems: newItems,
                totalFavCount: newItemsCount
            }
        }

        case constants.REMOVE_ITEM_FROM_FAVOURITES: {
            return {
                ...state,
                favouriteItems: state.favouriteItems.filter(item => item.id !== action.payload),
                totalFavCount: state.totalFavCount - 1
            }
        }

        case constants.CLEAR_FAVOURITES: {
            return {
                ...state,
                favouriteItems: [],
                totalFavCount: 0
            }
        }

        default:
            return state
    }
}
