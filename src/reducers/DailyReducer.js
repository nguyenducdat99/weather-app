import * as types from '../constants/ActionTypes';

const initialState = [];

function myReducer(state=initialState, action) {
    const type = action.type;
    const payload = action.payload;


    switch (type) {
        case types.GET_WEATHER_SUCCESS:
            state = [
                ...payload.data.daily
            ];
            
            return [...state];
        case types.GET_WEATHER_FAILED:
            alert(payload.message);
            state = [...initialState];

            return [...state]
        default:

            return state;
    }
}

export default myReducer;