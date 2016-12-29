import { SET_TIMERHALTED } from '../action-creators.js'

export default function timerHalted (state = false, action) {
  switch (action.type) {
    case SET_TIMERHALTED:
      return action.timerHalted

    default:
      return state
  }
}
