import './index.css'

const FilterSection = props => {
  const {changeFilter} = props

  return (
    <div className="filter-container">

      <button
        onClick={() => changeFilter('Low')}
      >
        Low
      </button>

      <button
        onClick={() => changeFilter('Medium')}
      >
        Medium
      </button>

      <button
        onClick={() => changeFilter('High')}
      >
        High
      </button>

      <button
        onClick={() => changeFilter('All')}
      >
        All
      </button>

    </div>
  )
}

export default FilterSection