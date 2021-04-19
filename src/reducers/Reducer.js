import { combineReducers } from 'redux';
import daily from './DailyReducer';
import current from './CurrentReducer';
import temperature from './TemperatureReducer';
import hourly from './HourlyReducer';

// return root reducer
export const rootReducer = combineReducers({
    daily,
    current,
    temperature,
    hourly
});
