import { connect } from 'react-redux'
import View from '../components/Message'
import { creators } from '../actions'

const mapStateToProps = (state, ownProps) => ({
  message: state.message
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  close: () => {
    dispatch(creators.clearMessage())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(View)
