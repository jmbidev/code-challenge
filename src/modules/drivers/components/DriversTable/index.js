import React from 'react'
import { Table } from 'react-bootstrap'
import PropTypes from 'prop-types'

import DriversTableRow from '../../containers/DriversTableRow'

const DriversTable = ({ drivers }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Patente</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {drivers.map((driver, index) => <DriversTableRow index={index + 1} key={index} driver={driver} />)}
      </tbody>
    </Table>
  )
}

DriversTable.propTypes = {
  drivers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    carLicensePlate: PropTypes.string,
    carModel: PropTypes.string,
    carYear: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  })).isRequired
}

export default DriversTable
