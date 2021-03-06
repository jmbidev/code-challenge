import React, { useState, useCallback } from 'react'
import { Button } from 'react-bootstrap'
import PropTypes from 'prop-types'

import LoadingSpinner from '../../../../components/LoadingSpinner'

const DriversTableRow = ({ index, driver, deleteDriver }) => {
  const [isDriverBeingDeleted, setIsDriverBeingDeleted] = useState(false)

  const onDelete = useCallback(
    () => {
      setIsDriverBeingDeleted(true)
      deleteDriver(driver.id).then((isDriverSuccessfullyDeleted) => {
        if (!isDriverSuccessfullyDeleted) {
          setIsDriverBeingDeleted(false)
        }
      })
    },
    [driver, setIsDriverBeingDeleted, deleteDriver]
  )

  return (
    <tr>
      <td>
        {index}
      </td>
      <td>
        {driver.firstName}
      </td>
      <td>
        {driver.lastName}
      </td>
      <td>
        {driver.carLicensePlate}
      </td>
      <td>
        <Button variant='danger' onClick={onDelete}>Eliminar</Button>
        {isDriverBeingDeleted && <LoadingSpinner />}
      </td>
    </tr>
  )
}

DriversTableRow.propTypes = {
  index: PropTypes.number.isRequired,
  driver: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    carLicensePlate: PropTypes.string,
    carModel: PropTypes.string,
    carYear: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  }).isRequired,
  deleteDriver: PropTypes.func.isRequired
}

export default DriversTableRow
