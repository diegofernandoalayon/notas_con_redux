import { createNote, toggleImportanceOf } from './reducers/noteReducer';

import{ useSelector, useDispatch} from 'react-redux'

const App = () => {
  // const store = useSelector(state => state)
  const notes = useSelector(state => state) // de esta manera nos podemos suscribir a cierta parte del estado 
  const dispatch = useDispatch()
  const addNote = (event) => {
    event.preventDefault()
    const {target} = event
    const content = target.note.value
    target.note.value=''
    dispatch(createNote(content))
  }
  const toggleImportant = (id) => {
    dispatch(toggleImportanceOf(id))
  }
  return (
    <div>
      <form onSubmit={addNote}>
        <input name='note' />
        <button>add</button>
      </form>
      <ul>
        {
          notes.map((note) => {
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
export default App