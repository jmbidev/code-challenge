import React, { useCallback, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import PropTypes from 'prop-types'

import DriversTable from '../DriversTable'
import NoDrivers from '../NoDrivers'
import LoadingSpinner from '../../../../components/LoadingSpinner'

const ShowDrivers = ({ drivers, loadDrivers }) => {
  const history = useHistory()
  const [isDriversListBeingLoaded, setIsDriversListBeingLoaded] = useState(false)

  const finishLoading = useCallback(
    () => {
      setIsDriversListBeingLoaded(false)
    },
    [setIsDriversListBeingLoaded]
  )

  useEffect(
    () => {
      setIsDriversListBeingLoaded(true)
      loadDrivers().then(finishLoading)
    },
    [loadDrivers, setIsDriversListBeingLoaded, finishLoading]
  )

  const navigateToAddDriverScreen = useCallback(
    () => {
      history.push(history.location.pathname + '/add')
    },
    [history]
  )

  const thereAreDrivers = drivers && drivers.length !== 0

  return (
    <>
      {isDriversListBeingLoaded && <LoadingSpinner />}
      {thereAreDrivers && <DriversTable drivers={drivers} />}
      {!thereAreDrivers && <NoDrivers />}
      <Button variant='primary' onClick={navigateToAddDriverScreen}>Añadir conductor</Button>
    </>
  )
}

ShowDrivers.propTypes = {
  drivers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    carLicensePlate: PropTypes.string,
    carModel: PropTypes.string,
    carYear: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  })),
  loadDrivers: PropTypes.func.isRequired
}

export default ShowDrivers
