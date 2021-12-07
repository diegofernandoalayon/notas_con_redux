import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { createStore } from 'redux'
import { noteReducer } from './reducers/noteReducer';

const store = createStore(noteReducer)

const generateId = () => Math.floor(Math.random() * 9999999999) + 1

const createNote = (content) => {
  return {
    type:'@notes/created',
      payload: {
        content,
        important: false,
        id: generateId()
      }
  }
}
const toggleImportanceOf = (id) => {
  return { 
    type: '@notes/toggle_important',
    payload: {
      id
    }
  }
}

const App = () => {
  const state = store.getState()
  const addNote = (event) => {
    event.preventDefault()
    const {target} = event
    const content = target.note.value
    target.note.value=''
    store.dispatch(createNote(content))
  }
  const toggleImportant = (id) => {
    store.dispatch(toggleImportanceOf(id))
  }
  return (
    <div>
      <form onSubmit={addNote}>
        <input name='note' />
        <button>add</button>
      </form>
      <ul>
        {
          state.map((note) => {
            return <li key={note.id} onClick={() => toggleImportant(note.id)}>
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
    </div>

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

