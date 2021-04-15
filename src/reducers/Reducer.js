import { combineReducers } from 'redux';
import weather from './WeatherReducer';
// return root reducer
export const rootReducer = combineReducers({
    weather
});
