import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { creators } from '../actions'
import View from '../components/DriversTableRow'

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators({
  deleteDriver: creators.removeDriver
}, dispatch)

const Container = connect(mapStateToProps, mapDispatchToProps)(View)

export default Container
