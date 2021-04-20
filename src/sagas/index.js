import { call, put, takeEvery } from 'redux-saga/effects';
import * as actions from '../actions/Actions';
import * as APITask from '../commons/APITask';
import * as types from '../constants/ActionTypes';



function* getLocations() {
    const location = yield call(APITask.getlocation);
    if (location.lat&&location.lon) yield put(actions.onSetLocation({
        message: "Vị trí hiện tại.",
        name: "Vị trí của bạn"
    }))

    const getWeather = yield call(
        APITask.getWeather,
        {
            lat: location.lat||21.020045,
            lon: location.lon||105.783961
        }
    );

    if (getWeather.status === 200) {
        yield put(actions.onWeatherSuccess(getWeather.data));
        yield put(actions.onCurrentWeather(getWeather.data));
        yield put(actions.onHourlyWeather(getWeather.data));
    }else{
        yield put(actions.onWeatherFailed());
    }

    
}
function* getLattitudeAndLongtitude(action) {
    const payload = action.payload;

    const getLocations = yield call(APITask.getLattitudeAndLongtitude,payload.data);

    if ((getLocations.status === 200)&&(getLocations.data.length>0)) {
        yield put(actions.onGetLocation(getLocations.data));
        
        const getWeather = yield call(
            APITask.getWeather,
            {
                lat: getLocations.data[0].lat,
                lon: getLocations.data[0].lon
            }
        );

        if (getWeather.status === 200) {
            yield put(actions.onWeatherSuccess(getWeather.data));
            yield put(actions.onCurrentWeather(getWeather.data));
            yield put(actions.onHourlyWeather(getWeather.data));
        }else{
            yield put(actions.onWeatherFailed());
        }
    }else{
        alert("Không có thông tin trong cơ sở dữ liệu");
    }

    
}

function* rootSagas() {
    yield takeEvery(types.GET_WEATHER_LISTEN,getLocations);
    yield takeEvery(types.GET_LATTITUDE_LONGTITUDE_LISTEN,getLattitudeAndLongtitude);
}

export default rootSagas;