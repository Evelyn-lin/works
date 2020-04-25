import React from 'react';
import ReactDOM from 'react-dom';
import IRouter from './router'
import {Provider} from 'react-redux'
import createStoreStore from './redux/store'

const store = createStoreStore();


ReactDOM.render(
  <Provider store={store}>
        <IRouter />
    </Provider>,
  document.getElementById('root')
);
