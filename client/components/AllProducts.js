import React from 'react'
import {connect} from 'react-redux'
import ProductCard from './ProductCard'

const AllProducts = props => {
  const category = props.location.pathname === '/pins' ? 'Pins' : 'Stickers'
  const items = props.products.filter(product => product.category === category)

  return (
    <>
      <h1 id="stickersH1">{category}</h1>
      <div className="allproducts-container">
        <div className="flex-container">
          {items.map(item => <ProductCard key={item.id} item={item} />)}
        </div>
      </div>
    </>
  )
}

const mapState = state => ({products: state.inventory.products})

export default connect(mapState)(AllProducts)
