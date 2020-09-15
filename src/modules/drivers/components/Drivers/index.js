import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

import ShowDrivers from '../../containers/ShowDrivers'
import AddDriverForm from '../../containers/AddDriverForm'

const Drivers = ({ match }) => {
  return (
    <Switch>
      <Route exact path={`${match.path}/`} component={ShowDrivers} />
      <Route path={`${match.path}/add`} component={AddDriverForm} />
      <Route><Redirect to={`${match.path}/`} /></Route>
    </Switch>
  )
}

Drivers.propTypes = {
  match: PropTypes.object.isRequired
}

export default Drivers
