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

export const loadItems = (selectedBrands, selectedWeights) => dispatch => {

    const brandsStringGenerator = (selectedBrands) => selectedBrands.join('&brand=')
    const weightsStringGenerator = (selectedWeights) => selectedWeights.join('&weight=')

    dispatch(loadItemsRequest())

    setTimeout(() => {
        axios.get(`/tobacco?${selectedBrands.length > 0 ? `brand=${brandsStringGenerator(selectedBrands)}` : ''}${selectedWeights.length > 0 ? `&weight=${weightsStringGenerator(selectedWeights)}` : ''}`)
            .then(({ data }) => dispatch(loadItemsSuccess(data)))
            .catch((error) => dispatch(loadItemsFailure(error)))
    }, 300)
}


