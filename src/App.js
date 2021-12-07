import { createNote, toggleImportanceOf } from './reducers/noteReducer';

const App = ({store}) => {
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
export default App