import './index.css'
const SuggestionItem = props => {
  const {suggestionsList, load} = props
  const {suggestion} = suggestionsList
  const loaded = () => {
    load(suggestion)
  }
  return (
    <li>
      <div className="suggestions">
        <p>{suggestion}</p>
        <button type="button" onClick={loaded} className="arrow-button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
            alt="arrow"
            className="load"
          />
        </button>
      </div>
    </li>
  )
}
export default SuggestionItem
