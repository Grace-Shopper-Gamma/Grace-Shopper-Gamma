import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ProductCard from '../components/ProductCard'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('ProduceCard', () => {
  let productCard

  beforeEach(() => {
    const item = {
      category: 'Pins',
      createdAt: '2021-01-16T17:08:06.380Z',
      id: 1,
      imageUrl:
        'https://www.flaticon.com/svg/vstatic/svg/1274/1274860.svg?token=exp=1610559388~hmac=85e15df3cecccc2b4e65ba64d09a2b97',
      price: 400,
      name: 'small pin',
      rating: 2,
      updatedAt: '2021-01-16T17:08'
    }
    productCard = shallow(<ProductCard item={item} />)
  })

  it('has className flex-container', () => {
    expect(productCard.hasClass('flex-container'))
  })

  it('has a Link child', () => {
    expect(productCard.props().children.type.toString()).to.equal(
      'function Link() {\n    return _React$Component.apply(this, arguments) || this;\n  }'
    )
  })

  it('renders imageUrl, name, and price', () => {
    const children = productCard.props().children.props.children
    const img = children[0].props
    const name = children[1].props
    const price = children[2].props

    expect(img.src).to.equal(
      'https://www.flaticon.com/svg/vstatic/svg/1274/1274860.svg?token=exp=1610559388~hmac=85e15df3cecccc2b4e65ba64d09a2b97'
    )
    expect(name.children).to.equal('small pin')
    expect(price.children[1]).to.equal(400)
  })
})
