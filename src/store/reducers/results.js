import * as actionTypes from '../actionTypes';


const initialState = {
    results : []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.STORE_RESULT:
            return{
                ...state,
                results : state.results.concat({ id: new Date(), value: action.payload})
            }
            case actionTypes.DELETE_RESULT:
                // const id = action.payload
                // const newArray = [...state.results];
                // newArray.splice(id, 1)

                const newArray = state.results.filter(res => res.id !== action.payload);

            return{
                ...state,
                results : newArray
            }
            default:
                return state;
    }
};

export default reducer;