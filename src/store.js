import { noteReducer } from './reducers/noteReducer';
import { filterReducer } from './reducers/filterReducer';
import { createStore, combineReducers } from 'redux'

import { composeWithDevTools } from 'redux-devtools-extension'
import {getAll} from './services/notes'

const reducer = combineReducers({
  notes: noteReducer,
  filter: filterReducer
})
export const store = createStore(
  reducer, 
  composeWithDevTools())

getAll().then(notes => {
  notes.forEach(note => {
    console.log(store)
    store.dispatch({type: '@notes/created', payload: note})
  })
})