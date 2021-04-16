import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './commons/store';
import AppContainer from './containers/AppContainer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const rooStore = store();

ReactDOM.render(
    <React.StrictMode>
        <Provider store={rooStore}>
        <AppContainer />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
