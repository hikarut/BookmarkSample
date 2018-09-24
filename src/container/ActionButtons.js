/* @flow */

'use strict'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { canBack, canForward } from '../actions/backAndForward'
import ActionButtons from '../components/ActionButtons'

// reduxとの連携
ActionButtons.propTypes = {
  back: PropTypes.bool.isRequired,
  forward: PropTypes.bool.isRequired
}
const mapStateToProps = state => ({
  canBack: state.canBack,
  canForward: state.canForward
})
const mapDispatchToProps = dispatch => ({
  back: status => dispatch(canBack(status)),
  forward: status => dispatch(canForward(status))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActionButtons)
