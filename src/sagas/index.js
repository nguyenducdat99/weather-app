import { call, put, takeEvery } from 'redux-saga/effects';
import * as actions from '../actions/Actions';
import * as APITask from '../commons/APITask';
import * as types from '../constants/ActionTypes';



function* getLocations() {
    const location = yield call(APITask.getlocation);

        const getWeather = yield call(
        APITask.getWeather,
        {
            lat: location.lat||21.020045,
            lon: location.lon||105.783961
        });

    if (getWeather.status === 200) {
        yield put(actions.onWeatherSuccess(getWeather.data));
        yield put(actions.onCurrentWeather(getWeather.data));
        yield put(actions.onHourlyWeather(getWeather.data));
    }else{
        yield put(actions.onWeatherFailed());
    }

    
}

function* rootSagas() {
    yield takeEvery(types.GET_WEATHER_LISTEN,getLocations);
}

export default rootSagas;