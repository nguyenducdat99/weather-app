import * as types from '../constants/ActionTypes';

const initialState = true;

function myReducer(state=initialState, action) {
    const type = action.type;

    switch (type) {
        case types.TOGGLE_TEMPERATURE:
            state = !state;
            
            return state;
        default:

            return state;
    }
}

export default myReducer;