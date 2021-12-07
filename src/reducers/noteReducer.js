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