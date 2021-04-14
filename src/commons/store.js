import { applyMiddleware, compose, createStore } from 'redux';
import { rootReducer } from '../reducers/Reducer';
import createSagaMiddleware from 'redux-saga'
import rootSagas from '../sagas/index';
const sagaMiddleware = createSagaMiddleware();

// return store
export const store = () => {

    const store = createStore(
        rootReducer, 
        compose(
            applyMiddleware(sagaMiddleware),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    );

    sagaMiddleware.run(rootSagas);
    return store;
}