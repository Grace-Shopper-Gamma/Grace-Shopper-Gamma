import React, {Component} from 'react'
import {connect} from 'react-redux'
import FormButton from './FormButton'
import {updateProduct, addProduct, deleteProduct} from '../store/products'

const defaultState = {
  name: '',
  description: 'Much product, much wow!',
  imageUrl:
    'https://www.flaticon.com/svg/vstatic/svg/1274/1274860.svg?token=exp=1610559388~hmac=85e15df3cecccc2b4e65ba64d09a2b97',
  msrp: 1,
  rating: 0,
  stock: 1,
  category: 'Pins'
}

class ProductForm extends Component {
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
    this.handleUpdate = this.handleUpdate.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
  }

  componentDidMount() {
    const {name, description, imageUrl, msrp, rating, stock, category} = this
      .props.update
      ? this.props.product
      : defaultState

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

  handleUpdate(event) {
    event.preventDefault()
    this.props.updateProduct(this.props.product.id, this.state)
  }

  handleAdd(event) {
    event.preventDefault()
    this.props.addProduct(this.state)
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
            placeholder="Name"
            value={name}
          />
          imageUrl:
          <input
            type="text"
            className="form-input input"
            name="imageUrl"
            onChange={this.handleChange}
            placeholder="imageUrl"
            value={imageUrl}
          />
          MSRP:
          <input
            type="number"
            className="form-input input"
            min={0}
            name="msrp"
            onChange={this.handleChange}
            placeholder="MSRP"
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
            placeholder="Rating"
            value={rating}
          />
          Stock:
          <input
            type="number"
            className="form-input input"
            min={0}
            name="stock"
            onChange={this.handleChange}
            placeholder="Stock"
            value={stock}
          />
          Description:
          <input
            type="text"
            className="form-input input"
            name="description"
            onChange={this.handleChange}
            placeholder="Description"
            value={description}
          />
          Category
          <select
            className="form-input input"
            name="category"
            onChange={this.handleChange}
            placeholder="Category"
            defaultValue={category}
          >
            <option value="Pins">Pins</option>
            <option value="Stickers">Stickers</option>
          </select>
          <FormButton
            displayName={(this.props.update ? 'Update' : 'Add') + ' Product'}
            handleSubmit={
              this.props.update ? this.handleUpdate : this.handleAdd
            }
          />
          {this.props.update && (
            <button
              className="delete-product"
              type="button"
              onClick={() => this.props.deleteProduct(this.props.product.id)}
            >
              REMOVE PRODUCT
            </button>
          )}
        </div>
      )
    )
  }
}

const mapDispatch = dispatch => ({
  updateProduct: (id, update) => dispatch(updateProduct(id, update)),
  addProduct: product => dispatch(addProduct(product)),
  deleteProduct: id => dispatch(deleteProduct(id))
})

export default connect(null, mapDispatch)(ProductForm)
