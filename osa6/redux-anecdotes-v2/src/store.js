import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import reducer from './reducers/anecdoteReducer'

const store = createStore(
	reducer,
	applyMiddleware(thunk)
)

export default store