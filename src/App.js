import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import NewNote from './components/NewNote'
import Notes from './components/Notes'
import { initNotes } from './reducers/noteReducer'
import { getAll } from './services/notes'
import { store } from './store'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    getAll().then(notes => {
      store.dispatch(initNotes(notes))
    })
  }, [dispatch])
  const filterSelected = value => {
    console.log(value)
  }
  return (
    <div>
      <NewNote />
      <div>
        all
        <input type='radio' name='filter' onChange={() => filterSelected('ALL')} />
        important
        <input type='radio' name='filter' onChange={() => filterSelected('IMPORTANT')} />
        not important
        <input type='radio' name='filter' onChange={() => filterSelected('NOT_IMPORTANT')} />
      </div>
      <Notes />
    </div>

  )
}
export default App
