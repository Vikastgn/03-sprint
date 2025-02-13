import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';
import * as serviceWorker from './serviceWorker';
import AppWithRedux from "./AppWithRedux";
import { store } from './state/store';
import { Provider } from 'react-redux';

const container  = document.getElementById('root') as HTMLElement
const root = createRoot(container);
root.render(
    <Provider store={store}>
    <AppWithRedux />
    </Provider>
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
