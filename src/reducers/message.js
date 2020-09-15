import { types } from '../actions'

export default (state = null, action) => {
  switch (action.type) {
    case types.SET_MESSAGE:
      return {
        title: action.title,
        body: action.body,
        variant: action.variant
      }
    case types.CLEAR_MESSAGE:
      return null
    default:
      return state
  }
}
