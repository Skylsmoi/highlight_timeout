import { SET_MESSAGE } from '../action-creators.js'

export default function message (state = 'Bonne année !', action) {
  switch (action.type) {
    case SET_MESSAGE:
      return action.message

    default:
      return state
  }
}
