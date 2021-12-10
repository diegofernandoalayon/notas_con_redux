
export default function VisibilityFilter () {
  const filterSelected = value => {
    console.log(value)
  }
  return (
    <div>
      all
      <input type='radio' name='filter' onChange={() => filterSelected('ALL')} />
      important
      <input type='radio' name='filter' onChange={() => filterSelected('IMPORTANT')} />
      not important
      <input type='radio' name='filter' onChange={() => filterSelected('NOT_IMPORTANT')} />
    </div>
  )
}
