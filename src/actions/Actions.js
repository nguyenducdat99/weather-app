import * as types from '../constants/ActionTypes';

// declare action
export const onWeatherListen = location => {
    return {
        type: types.GET_WEATHER_LISTEN,
        payload: {
            data: location
        }
    }
}
export const onWeatherSuccess = data => {
    return {
        type: types.GET_WEATHER_SUCCESS,
        payload: {
            message: 'Lấy dữ liệu thành công.',
            data: data
        }
    }
}
export const onWeatherFailed = () => {
    return {
        type: types.GET_WEATHER_FAILED,
        payload: {
            message: 'Không có dữ liệu thời tiết.',
            data: []
        }
    }
}