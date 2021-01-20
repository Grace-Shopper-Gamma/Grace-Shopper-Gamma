import React, {Component} from 'react'

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
      id,
      name,
      description,
      imageUrl,
      msrp,
      rating,
      stock,
      category
    } = this.props.product

    return (
      <div
        className="admin-product-card"
        onClick={() => this.setState({selected: !selected})}
      >
        <img src={imageUrl} />
        <div>
          <p>name: {name}</p>
          <p>msrp: {msrp}</p>
          <p>rating: {rating}</p>
          <p>stock: {stock}</p>
          <p>category: {category}</p>
        </div>
        <p>desc: {description}</p>
      </div>
    )
  }
}

export default AdminProductCard
