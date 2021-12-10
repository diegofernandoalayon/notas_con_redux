import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import NewNote from './components/NewNote'
import Notes from './components/Notes'
import VisibilityFilter from './components/VisibilityFilter'
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

  return (
    <div>
      <NewNote />
      <VisibilityFilter />
      <Notes />
    </div>

  )
}
export default App
