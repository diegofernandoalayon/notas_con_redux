import { useDispatch } from 'react-redux'
import { createNote } from '../reducers/noteReducer'
// import { createNewNote } from '../services/notes'
export default function NewNote () {
  const dispatch = useDispatch()
  // const

  const addNote = async (event) => {
    event.preventDefault()
    const { target } = event
    const content = target.note.value
    target.note.value = ''
    // const newNote = await createNewNote(content)
    dispatch(createNote(content))
  }

  return (
    <form onSubmit={addNote}>
      <input name='note' autoComplete='off' />
      <button>add</button>
    </form>
  )
}
