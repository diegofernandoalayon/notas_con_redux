import { noteReducer } from './reducers/noteReducer'
import { filterReducer } from './reducers/filterReducer'
import { createStore, combineReducers, applyMiddleware } from 'redux'

import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const reducer = combineReducers({
  notes: noteReducer,
  filter: filterReducer
})
export const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)
