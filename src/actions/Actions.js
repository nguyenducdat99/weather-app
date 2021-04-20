import * as types from '../constants/ActionTypes';

// declare action
export const onWeatherListen = () => {
    return {
        type: types.GET_WEATHER_LISTEN,
        payload: {
            message: 'Saga được gọi.',
            data: ''
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

export const onCurrentWeather = data => {
    return {
        type: types.SET_CURRENT_WEATHER,
        payload: {
            message: 'Lấy dữ liệu thành công',
            data: data
        }
    }
}
export const onHourlyWeather = data => {
    return {
        type: types.SET_HOURLY_WEATHER,
        payload: {
            message: 'Lấy dữ liệu thành công',
            data: data
        }
    }
}

export const onToggleTemperature = () => {
    return {
        type: types.TOGGLE_TEMPERATURE,
        payload: {
            message: 'Dispatch action thành công',
            data: ''
        }
    }
}

export const onSetLocation = data => {
    return {
        type: types.SET_LOCATION,
        payload: {
            message: 'Lấy dữ liệu cho vị trí',
            data: data
        }
    }
}