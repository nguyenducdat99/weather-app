import * as types from '../constants/ActionTypes';

const initialState = {
    message: 'Vị trí mặc định',
    name: 'Công ty AHT'
};

function myReducer(state=initialState, action) {
    const type = action.type;
    const payload = action.payload;


    switch (type) {
        case types.SET_LOCATION:
            state = {
                ...state,
                message: payload.data.message,
                name: payload.data.name
            }

            return {...state};
        default:

            return state;
    }
}

export default myReducer;