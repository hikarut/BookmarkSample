/* @flow */

'use strict'

import { combineReducers } from 'redux'
import { canBack, canForward } from './backAndForward'

export default combineReducers({
  canBack,
  canForward
})
