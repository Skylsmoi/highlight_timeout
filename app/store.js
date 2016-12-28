import { createStore } from 'redux'
import coreReducer from './reducers/core.js'

const defaultStore = {}

export const store = createStore(coreReducer, defaultStore, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
