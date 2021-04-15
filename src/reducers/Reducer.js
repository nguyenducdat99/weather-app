import { combineReducers } from 'redux';
import daily from './DailyReducer';
import current from './CurrentReducer';
// return root reducer
export const rootReducer = combineReducers({
    daily,
    current
});
