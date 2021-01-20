import React, {Component} from 'react'

import ProductForm from './ProductForm'

class AdminProductCard extends Component {
  constructor() {
    super()
    this.state = {
      selected: false
    }
  }

  render() {
    const {selected} = this.state
    const {
      name,
      description,
      imageUrl,
      msrp,
      rating,
      stock,
      category
    } = this.props.product

    return (
      <div className="admin-product-container">
        <div>
          <div
            className="admin-product-card"
            onClick={() => this.setState({selected: !selected})}
          >
            <img src={imageUrl} />
            <div>
              <p>
                <strong>name:</strong> {name}
              </p>
              <p>
                <strong>msrp:</strong> {msrp}
              </p>
              <p>
                <strong>rating:</strong> {rating}
              </p>
              <p>
                <strong>stock:</strong> {stock}
              </p>
              <p>
                <strong>category</strong> {category}
              </p>
            </div>
            <p>
              <strong>desc:</strong> {description}
            </p>
          </div>
        </div>
        {selected && <ProductForm update={true} product={this.props.product} />}
      </div>
    )
  }
}

export default AdminProductCard
