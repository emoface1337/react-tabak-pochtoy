import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import contentReducer from './reducers/contentReducer'
import cartReducer from './reducers/cartReducer'
import { filterReducer } from './reducers/filterReducer'
import { favouritesReducer } from './reducers/favouritesReducer'

const rootReducer = combineReducers({
    contentReducer,
    cartReducer,
    filterReducer,
    favouriteReducer: favouritesReducer
})

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export default store