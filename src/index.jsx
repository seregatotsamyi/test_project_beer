import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/style.min.css';
import MainApp from './MainApp';
import { Provider } from 'react-redux'
import {store} from "./store/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <MainApp/>
    </Provider>
);


