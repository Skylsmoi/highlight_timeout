import { SET_COUNTDOWN } from '../action-creators.js'

export default function countdown (state = '', action) {
  switch (action.type) {
    case SET_COUNTDOWN:
      return action.countdown

    default:
      return state
  }
}
