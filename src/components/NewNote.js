import { useDispatch } from "react-redux"
import { createNote } from '../reducers/noteReducer'
export default function NewNote () {
  const dispatch = useDispatch()
  // const 

  const addNote = (event) => {
    event.preventDefault()
    const {target} = event
    const content = target.note.value
    target.note.value=''
    dispatch(createNote(content))
  }

  return(
    <form onSubmit={addNote}>
      <input name='note' autoComplete='off' />
      <button>add</button>
    </form>
  )
}