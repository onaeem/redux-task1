import React from 'react';
import ReactDOM from 'react-dom';
import Parent from "./components/Parent";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';

const store = createStore(reducer);

ReactDOM.render (
    <Provider store={store}>
        <Parent/>
    </Provider>,
    document.getElementById('root')
);