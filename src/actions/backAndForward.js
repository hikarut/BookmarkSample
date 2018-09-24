/* @flow */

'use strict'

export const back = (back: boolean) => ({
  type: 'BACK',
  canBack: back
})

export const forward = (forward: boolean) => ({
  type: 'FORWARD',
  canForward: forward
})

export function canBack(status: boolean): Object {
  return dispatch => {
    console.log('action canBack')
    dispatch(back(status))
  }
}

export function canForward(status: boolean): Object {
  return dispatch => {
    dispatch(forward(status))
  }
}
