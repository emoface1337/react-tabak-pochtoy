import { constants } from '../constants'

export const addItemToFavourites = item => ({
    type: constants.ADD_ITEM_TO_FAVOURITES,
    payload: item
})

export const removeItemFromFavourites = id => ({
    type: constants.REMOVE_ITEM_FROM_FAVOURITES,
    payload: id
})

export const clearFavourites = () => ({
    type: constants.CLEAR_FAVOURITES
})