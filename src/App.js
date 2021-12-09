import NewNote from './components/NewNote';
import Notes from './components/Notes';

const App = () => {
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