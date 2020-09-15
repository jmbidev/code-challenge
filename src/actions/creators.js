import * as types from './types'

export const setMessage = (title, body, variant) => ({
  type: types.SET_MESSAGE,
  title,
  body,
  variant
})

export const clearMessage = () => ({
  type: types.CLEAR_MESSAGE
})
