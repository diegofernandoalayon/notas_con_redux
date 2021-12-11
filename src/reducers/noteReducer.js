import { createNewNote, getAll } from '../services/notes'

export const noteReducer = (state = [], action) => {
  if (action.type === '@notes/init') {
    return action.payload
  }
  if (action.type === '@notes/created') {
    return state.concat(action.payload)
  }
  if (action.type === '@notes/toggle_important') {
    const { id } = action.payload
    return state.map(note => {
      if (note.id === id) {
        return {
          ...note,
          important: !note.important
        }
      }
      return note
    })
  }
  return state
}

// const generateId = () => Math.floor(Math.random() * 9999999999) + 1

export const createNote = content => {
  return async (dispatch) => {
    const newNote = await createNewNote(content)
    dispatch({
      type: '@notes/created',
      payload: newNote
    })
  }
}
export const toggleImportanceOf = (id) => {
  return {
    type: '@notes/toggle_important',
    payload: {
      id
    }
  }
}
export const initNotes = () => {
  return async (dispatch) => {
    const notes = await getAll()
    dispatch({
      type: '@notes/init',
      payload: notes
    })
  }
}
