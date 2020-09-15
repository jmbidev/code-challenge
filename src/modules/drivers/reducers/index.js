import { combineReducers } from 'redux'
import driversList from './driversList'
import isDriversListLoaded from './isDriversListLoaded'
import selectedDriver from './selectedDriver'

export default combineReducers({
  driversList,
  isDriversListLoaded,
  selectedDriver
})
