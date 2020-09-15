import * as types from './types'
import * as api from '../../../api'

import { setMessage } from '../../../actions/creators'

export const addDriver = (driver) => (dispatch) => {
  return api.doPost(api.paths.DRIVERS, driver).then(
    response => {
      if (response.data.success) {
        dispatch(driverAdded(driver, response.data.id))
        dispatch(setMessage('El conductor ha sido agregado correctamente', '', 'info'))
        return true
      } else {
        dispatch(setMessage('El conductor no ha podido ser agregado correctamente', '', 'danger'))
        return false
      }
    },
    error => {
      dispatch(setMessage('El conductor no ha podido ser agregado correctamente', `Error de comunicacion con la api rest, status: ${error.response.status}`, 'danger'))
      return false
    }
  ).then((driverAdded) => {
    return driverAdded
  })
}

export const driverAdded = (driver, id) => ({
  type: types.ADD_DRIVER,
  driver: { id, ...driver }
})

export const removeDriver = (id) => {
  return (dispatch) => {
    return api.doDelete(`${api.paths.DRIVERS}/${id}`).then(
      response => {
        if (response.data.success) {
          dispatch(driverRemoved(id))
          dispatch(setMessage('El conductor ha sido eliminado correctamente', '', 'info'))
          return true
        } else dispatch(setMessage('No se ha podido eliminar al conductor', '', 'danger'))
        return false
      },
      error => {
        dispatch(setMessage('No se ha podido eliminal al conductor', `Error de comunicacion con la api rest, status: ${error.response.status}`, 'danger'))
        return false
      }
    )
  }
}

export const driverRemoved = (id) => ({
  type: types.REMOVE_DRIVER,
  id
})

export const loadDrivers = () => {
  return (dispatch, getState) => {
    const { driversLoaded } = getState().drivers

    if (driversLoaded) {
      return Promise.resolve(true)
    }

    return api.doGet(api.paths.DRIVERS).then(
      response => {
        if (response.data.success) {
          dispatch(updateDrivers(response.data.drivers))
          dispatch(setDriversLoaded(true))
          return true
        } else {
          dispatch(setMessage('Error al intentar obtener los conductores', '', 'danger'))
          return false
        }
      },
      error => {
        dispatch(setMessage('No se han podido obtener los conductores', `Error de comunicacion con la api rest, status: ${error.response.status}`, 'danger'))
        return false
      }
    )
  }
}

export const setDriversLoaded = (driversLoaded) => ({
  type: types.SET_DRIVERS_LOADED,
  driversLoaded
})

export const updateDrivers = (drivers) => ({
  type: types.UPDATE_DRIVERS,
  drivers
})

export const selectDriver = (id) => ({
  type: types.SELECT_DRIVER,
  id
})
