import * as actionTypes from '../actionTypes';



const initialState = {
    counter : 0
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.INCREMENT: 
        const newState = Object.assign({} , state);
        newState.counter = state.counter + 1;
        return newState;
        
        case actionTypes.DECREMENT: 
        return {
            ...state,
            counter : state.counter - 1
        }
        case actionTypes.ADD: 
        return {
            ...state,
            counter : state.counter + action.payload
        }
        case actionTypes.SUB: 
        return {
            ...state,
            counter : state.counter - action.payload
        }
        default :
        return state;
    }

};

export default reducer;