import { combineReducers } from 'redux'

import drivers from '../modules/drivers/reducers'
import message from './message'

export default combineReducers({
  drivers,
  message
})
