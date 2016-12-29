export const SET_TIMERHALTED = 'SET_TIMERHALTED'
export const SET_COUNTDOWN = 'SET_COUNTDOWN'
export const SET_MESSAGE = 'SET_MESSAGE'

export function setTimerHalted (timerHalted) {
  return { type: SET_TIMERHALTED, timerHalted }
}

export function setCountdown (countdown) {
  return { type: SET_COUNTDOWN, countdown }
}

export function setMessage (message) {
  return { type: SET_MESSAGE, message }
}
