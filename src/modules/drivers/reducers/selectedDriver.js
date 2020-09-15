import { types } from '../actions'

export default (state = null, action) => {
  switch (action.type) {
    case types.SELECT_DRIVER:
      return action.id
    default:
      return state
  }
}
