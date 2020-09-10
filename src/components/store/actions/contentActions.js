import axios from 'axios'

import { constants } from '../constants'

const loadItemsRequest = () => ({
    type: constants.LOAD_ITEMS_REQUEST
})

const loadItemsSuccess = items => ({
    type: constants.LOAD_ITEMS_SUCCESS,
    payload: items
})

const loadItemsFailure = error => ({
    type: constants.LOAD_ITEMS_FAILURE,
    payload: error
})

export const loadItems = () => dispatch => {
    dispatch(loadItemsRequest())
    axios.get('/tobacco')
        .then(({ data }) => dispatch(loadItemsSuccess(data)))
        .catch((error) => dispatch(loadItemsFailure(error)))
}


