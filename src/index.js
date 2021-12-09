import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux';
import { noteReducer } from './reducers/noteReducer';
import App from './App';
const reducer = combineReducers({
  notes: noteReducer,
  filter: filterReducer
})
const store = createStore(reducer)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);



