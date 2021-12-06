import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { createStore } from 'redux'

const noteReducer = (state = [], action) => {
  if(action.type === '@notes/created') {
    return state.concat(action.payload)
  }
}
const store = createStore(noteReducer)

store.dispatch({
  type: '@notes/created',
  payload: {
    content: 'hola hola nota hona',
    important: true,
    id: 1
  }
})
store.dispatch({
  type: '@notes/created',
  payload: {
    content: 'tengo hambre 2',
    important: false,
    id: 2
  }
})

const App = () => {
  const state = store.getState()

  return (
    <ul>
      {
        state.map((note) => {
          return <li key={note.id}>
            {note.content}
            <strong>
              {
                note.important
                  ? ' important'
                  : ' not important'
              }
            </strong>
          </li>
        })
      }
    </ul>
  )
}

const renderApp = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
renderApp()
store.subscribe(renderApp)

