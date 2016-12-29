import { combineReducers } from 'redux'
import timerHalted from './timerHalted.js'

const coreReducer = combineReducers({
  timerHalted
})

export default coreReducer
