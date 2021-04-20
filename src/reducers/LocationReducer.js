import * as types from '../constants/ActionTypes';

const initialState = {
    message: 'Vị trí mặc định',
    name: 'Công ty AHT'
};

function myReducer(state=initialState, action) {
    const type = action.type;
    const payload = action.payload;

    switch (type) {
        case types.GET_LOCATION:
            state = {
                ...state,
                message: 'Lấy dữ liệu từ cơ sở dữ liệu',
                name: payload.data[0].local_names.vi||payload.data[0].name
            }
            
            return {...state }
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