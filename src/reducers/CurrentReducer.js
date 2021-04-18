import * as types from '../constants/ActionTypes';

const initialState = {};

function myReducer(state=initialState, action) {
    const type = action.type;
    const payload = action.payload;


    switch (type) {
        case types.SET_CURRENT_WEATHER:
            state = {
                ...payload.data.current
            }    

            console.log(state);

            return {...state};
        default:

            return state;
    }
}

export default myReducer;