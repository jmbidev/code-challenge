import { combineReducers } from 'redux'
import driversList from './driversList'
import driversLoaded from './driversLoaded'
import selectedDriver from './selectedDriver'

export default combineReducers({
  driversList,
  driversLoaded,
  selectedDriver
})
