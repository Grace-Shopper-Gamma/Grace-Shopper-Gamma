import React, {Component} from 'react'
import {connect} from 'react-redux'

import {getSingleSticker} from '../store/singleSticker'

class SingleSticker extends Component {
  componentDidMount() {
    this.fetchSticker(this.props.params.id)
  }

  render() {
    const {sticker: {name, description, imageUrl, price, quantity}} = this.props

    return (
      <div className="single-sticker-container">
        <div className="single-sticker-content">
          <div className="image-container">
            <img src={imageUrl} />
          </div>
          <div className="info-container">
            <h1>{name}</h1>
            <p>Rating: {rating}</p>
            <p>{description}</p>
            <p>{quantity}</p>
            <h4>{price}</h4>
            {/* <AddToCart /> need to finish */}
          </div>
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  sticker: state.sticker
})

const mapDispatch = dispatch => ({
  fetchSticker: id => dispatch(getSingleSticker(id))
})

export default connect(mapState, mapDispatch)(SingleSticker)
