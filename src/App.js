import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import NewNote from './components/NewNote'
import Notes from './components/Notes'
import VisibilityFilter from './components/VisibilityFilter'
import { initNotes } from './reducers/noteReducer'
// import { store } from './store'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initNotes())
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
