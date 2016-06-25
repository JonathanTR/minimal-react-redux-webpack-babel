export const SET_MESSAGE = 'SET_MESSAGE'

export function setMessage(message) {
  return {
    type: SET_MESSAGE,
    payload: message
  }
}
