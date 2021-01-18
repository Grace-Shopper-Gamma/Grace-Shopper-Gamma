import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class ProductCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false
    }
  }

  componentDidMount() {
    this.setState({loaded: true})
  }

  render() {
    const {name, imageUrl, msrp, id} = this.props.item
    return (
      <Link
        to={`/pins/${id}`}
        className={`indSticker ${this.state.loaded ? 'loaded' : ''}`}
      >
        <div>
          <img src={imageUrl} alt={`Picture of ${name}`} className="allImg" />
          <div className="card-info">
            <h3 id="name">{name}</h3>
            <p id="price">${(msrp / 100).toFixed(2)}</p>
          </div>
        </div>
      </Link>
    )
  }
}

export default ProductCard
