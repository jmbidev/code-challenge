import { types } from '../actions'

export default (state = [], action) => {
  const { type } = action

  switch (type) {
    case types.ADD_DRIVER:
      return [...state, { ...action.driver }]
    case types.REMOVE_DRIVER:
      return state.filter((driver) => driver.id !== action.id)
    case types.UPDATE_DRIVERS:
      return [...action.drivers]
    default:
      return state
  }
}
