import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {Provider} from 'react-redux'
import renderer from 'react-test-renderer'
import {SingleProduct} from '../components'
import store from '../store'

const adapter = new Adapter()
enzyme.configure({adapter})

describe.only('SingleProduct', () => {
  let singleProduct

  beforeEach(() => {
    singleProduct = renderer.create(
      <Provider store={store}>
        <SingleProduct match={{params: {id: 13}}} />
      </Provider>
    )
  })

  it('has className single-product-container', () => {
    singleProduct.toJSON()
    expect(singleProduct.toJSON().props.className).to.equal(
      'single-product-container '
    )
  })
})
