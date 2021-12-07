import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import { noteReducer } from './reducers/noteReducer';
import App from './App';
const store = createStore(noteReducer)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);



