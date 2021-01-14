import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getSinglePin, addToCart} from '../store/singlePin'
import FormButton from './FormButton'

class AllPins extends Component {
  componentDidMount() {
    this.props.getSinglePin(this.props.match.params.id)
  }
  catch(err) {
    console.log(err)
  }

  handleSubmit = evt => {
    evt.preventDefault()
    try {
      this.props.addToCart(this.props.pin)
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    const {
      name,
      description,
      imageUrl,
      price,
      quantity,
      rating,
      stock
    } = this.props.pin
    return (
      <div>
        <h1>{name}</h1>
        <img src={imageUrl} alt={`Photo of ${name} pin`} />
        <p>{description}</p>
        <h4>Price: {price}</h4>
        <h4>Qty: {quantity}</h4>
        <h4>Rating: {rating}</h4>
        <h4>Stock: {stock}</h4>
        <FormButton
          displayName="Add To Cart"
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}

const mapState = state => ({pin: state.pin})

const mapDispatch = dispatch => ({
  getSinglePin: id => dispatch(getSinglePin(id)),
  addToCart: pin => dispatch(addToCart(pin))
})

export default connect(mapState, mapDispatch)(AllPins)
