import './index.css'
import {Component} from 'react'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {initialDestinationsList} = this.props
    const {searchInput} = this.state
    const searchResults = initialDestinationsList.filter(eachUser =>
      eachUser.name.toLowerCase().includes(searchInput),
    )
    return (
      <div className="bg-container">
        <h1 className="heading-1">NETFLIX</h1>
        <div className="search-container">
          <div>
            <div className="search-container-2">
              <input
                type="search"
                className="search-bar"
                placeHolder="search"
                onChange={this.onChangeSearchInput}
                value={searchInput}
              />
              <img
                src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
                alt="search icon"
                className="search-icon"
              />
            </div>
            <ul className="destinations-container">
              {searchResults.map(eachDestination => (
                <DestinationItem
                  key={eachDestination.id}
                  destinationDetails={eachDestination}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default DestinationSearch