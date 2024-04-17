import './index.css'
import {Component} from 'react'
import SuggestionItem from '../../components/SuggestionItem'
class GoogleSuggestions extends Component {
  state = {search: ''}
  typing = event => {
    this.setState({search: event.target.value})
  }
  load = value1 => {
    this.setState({search: value1})
  }
  render(props) {
    const {suggestionsList} = this.props
    const searchItem = this.state.search
    const filteredList = suggestionsList.filter(eachItem => {
      return eachItem.suggestion
        .toLowerCase()
        .includes(searchItem.toLowerCase())
    })
    return (
      <div className="bg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png "
          className="logo"
          alt="google logo"
        />
        <div className="card">
          <div className="innerCard">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="img"
            />
            <input
              value={searchItem}
              type="search"
              placeholder="search Google"
              onChange={this.typing}
            />
          </div>
          <ul>
            {filteredList.map(eachItem => {
              return (
                <SuggestionItem
                  suggestionsList={eachItem}
                  load={this.load}
                  key={eachItem.id}
                />
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
