import * as actionTypes from '../actionTypes';

  export function STORE_RESULT(result) {
    return {
      type: actionTypes.STORE_RESULT,
      payload: result
    }
  }
  export function DELETE_RESULT(id) {
    return {
      type: actionTypes.DELETE_RESULT,
      payload: id
    }
  }
  