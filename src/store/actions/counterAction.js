import * as actionTypes from '../actionTypes';


export function INCREMENT() {
    return {
      type: actionTypes.INCREMENT
    }
  }
  export function DECREMENT() {
    return {
      type: actionTypes.DECREMENT
    }
  }
  export function ADD(add) {
    return {
      type: actionTypes.ADD,
      payload: add
    }
  }
  export function SUB(sub) {
    return {
      type: actionTypes.SUB,
      payload: sub
    }
  }

  