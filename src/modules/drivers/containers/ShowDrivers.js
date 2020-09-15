import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { creators } from '../actions'
import ShowDrivers from '../components/ShowDrivers'

const mapStateToProps = (state, ownProps) => ({
  drivers: state.drivers.driversList
})

const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators({
  loadDrivers: creators.loadDrivers
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ShowDrivers)
