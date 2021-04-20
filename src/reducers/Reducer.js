import { combineReducers } from 'redux';
import daily from './DailyReducer';
import current from './CurrentReducer';
import temperature from './TemperatureReducer';
import hourly from './HourlyReducer';
import location from './LocationReducer';

// return root reducer
export const rootReducer = combineReducers({
    daily,
    current,
    temperature,
    hourly,
    location
});
