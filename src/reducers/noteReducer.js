export const noteReducer = (state = [], action) => {
  if(action.type === '@notes/created') {
    return state.concat(action.payload)
  }
  return state
}