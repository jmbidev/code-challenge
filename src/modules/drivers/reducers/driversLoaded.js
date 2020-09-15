import { types } from '../actions'

export default (state = false, action) => {
  switch (action.type) {
    case types.SET_DRIVERS_LOADED:
      return action.driversLoaded
    default:
      return state
  }
}
