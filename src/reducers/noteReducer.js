export const noteReducer = (state = [], action) => {
  if(action.type === '@notes/created') {
    return state.concat(action.payload)
  }
  if (action.type === '@notes/toggle_important') {
    const {id} = action.payload
    return state.map(note => {
      if(note.id === id) {
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

const generateId = () => Math.floor(Math.random() * 9999999999) + 1

export const createNote = (content) => {
  return {
    type:'@notes/created',
    payload: {
      content,
      important: false,
      id: generateId()
    }
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