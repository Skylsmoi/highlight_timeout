import { SET_TIME } from '../action-creators.js'

export default function time (state = 0, action) {
  switch (action.type) {
    case SET_TIME:
      return action.hour

    default:
      return state
  }
}
