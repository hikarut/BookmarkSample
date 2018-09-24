/* @flow */

'use strict'

export const canBack = (state: Array<Object> = [], action: Object) => {
  switch (action.type) {
    case 'CAN_BACK':
      return action.canBack
    default:
      return state
  }
}

export const canForward = (state: Array<Object> = [], action: Object) => {
  switch (action.type) {
    case 'CAN_FORWARD':
      return action.canForward
    default:
      return state
  }
}
