import React, {Component} from 'react'
import {connect} from 'react-redux'
import FormButton from './FormButton'
import {updateProduct} from '../store/products'

const defaultState = {
  description: 'Much product, much wow!',
  imageUrl:
    'https://www.flaticon.com/svg/vstatic/svg/1274/1274860.svg?token=exp=1610559388~hmac=85e15df3cecccc2b4e65ba64d09a2b97',
  msrp: 1,
  rating: 0,
  stock: 1,
  category: 'Pins'
}

class UpdateProduct extends Component {
  constructor() {
    super()
    this.state = {
      name: null,
      description: null,
      imageUrl: null,
      msrp: null,
      rating: null,
      stock: null,
      category: null,
      loaded: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    const {
      product: {name, description, imageUrl, msrp, rating, stock, category}
    } = this.props
    this.setState({
      name,
      description,
      imageUrl,
      msrp,
      rating,
      stock,
      category,
      loaded: true
    })
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.updateProduct(this.props.product.id, this.state)
  }

  render() {
    const {
      name,
      description,
      imageUrl,
      msrp,
      rating,
      stock,
      category,
      loaded
    } = this.state

    return (
      loaded && (
        <div className="product-update">
          Name:
          <input
            type="text"
            className="form-input input"
            name="name"
            onChange={this.handleChange}
            value={name}
          />
          imageUrl:
          <input
            type="text"
            className="form-input input"
            name="imageUrl"
            onChange={this.handleChange}
            value={imageUrl}
          />
          MSRP:
          <input
            type="number"
            className="form-input input"
            min={0}
            name="msrp"
            onChange={this.handleChange}
            value={msrp}
          />
          Rating:
          <input
            type="number"
            className="form-input input"
            min={0}
            max={5}
            name="rating"
            onChange={this.handleChange}
            value={rating}
          />
          Stock:
          <input
            type="number"
            className="form-input input"
            min={0}
            name="stock"
            onChange={this.handleChange}
            value={stock}
          />
          Category
          <input
            type="text"
            className="form-input input"
            name="category"
            onChange={this.handleChange}
            value={category}
          />
          Description:
          <input
            type="text"
            className="form-input input"
            name="description"
            onChange={this.handleChange}
            value={description}
          />
          <FormButton displayName="Update" handleSubmit={this.handleSubmit} />
        </div>
      )
    )
  }
}

const mapDispatch = dispatch => ({
  updateProduct: (id, update) => dispatch(updateProduct(id, update))
})

export default connect(null, mapDispatch)(UpdateProduct)
