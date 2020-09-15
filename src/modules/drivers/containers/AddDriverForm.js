import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import View from '../components/AddDriverForm'
import { creators } from '../actions'

const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators({
  addDriver: creators.addDriver
}, dispatch)

const Container = connect(mapStateToProps, mapDispatchToProps)(View)

export default Container
