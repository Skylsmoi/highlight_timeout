import { combineReducers } from 'redux'
import timerHalted from './timerHalted.js'
import countdown from './countdown.js'
import message from './message.js'

const coreReducer = combineReducers({
  timerHalted, countdown, message
})

export default coreReducer
