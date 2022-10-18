import './index.css'
import {Component} from 'react'

class DestinationItem extends Component {
  render() {
    const {destinationDetails} = this.props
    const {imageUrl, name} = destinationDetails

    return (
      <li className="destination-item">
        <img className="img-style" src={imageUrl} alt={name} />
        <p className="destination-name">{name}</p>
      </li>
    )
  }
}

export default DestinationItem