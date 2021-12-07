import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { createStore } from 'redux'
import { noteReducer } from './reducers/noteReducer';
import App from './App';
const store = createStore(noteReducer)

const renderApp = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App store = {store} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
renderApp()
store.subscribe(renderApp)

