import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter, { history } from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

// const store = configureStore();
const jsx = (
  // <Provider store={store}>
  //   <AppRouter />
  // </Provider>
  <div>
    <AppRouter />
  </div>
  
);


ReactDOM.render(jsx, document.getElementById("app"));