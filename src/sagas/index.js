import { call, put, takeEvery } from 'redux-saga/effects';
import * as actions from '../actions/Actions';
import * as APITask from '../commons/APITask';
import * as types from '../constants/ActionTypes';

function* getLocations(action) {
    const payload = action.payload;
    const getGeo = yield call(APITask.getGeo,payload.data);

    if (getGeo.status===200){
        const getWeather = yield call(APITask.getWeather,getGeo.data[0]);

        if (getWeather.status === 200) {
            yield put(actions.onWeatherSuccess(getWeather.data));
            yield put(actions.onCurrentWeather(getWeather.data));
        }else{
            yield put(actions.onWeatherFailed());
        }
    }else{
        yield put(actions.onWeatherFailed());
    }
    
}

function* rootSagas() {
    yield takeEvery(types.GET_WEATHER_LISTEN,getLocations);
}

export default rootSagas;