const {expect} = require('chai')
const db = require('../index')
const Product = db.model('product')

describe.only('Product model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('Creation', () => {
    it('can create a product instance with given values', async () => {
      const item = await Product.create({
        name: 'FSA',
        description: 'Fullstack Academy',
        imageUrl:
          'https://pbs.twimg.com/profile_images/1145685694238605312/q4JCNy_X_400x400.jpg',
        rating: 5,
        stock: 9001,
        msrp: 18000,
        category: 'Stickers'
      })
      expect(item.name).to.be.equal('FSA')
      expect(item.description).to.be.equal('Fullstack Academy')
      expect(item.imageUrl).to.be.equal(
        'https://pbs.twimg.com/profile_images/1145685694238605312/q4JCNy_X_400x400.jpg'
      )
      expect(item.rating).to.be.equal(5)
      expect(item.stock).to.be.equal(9001)
      expect(item.msrp).to.be.equal(18000)
      expect(item.category).to.be.equal('Stickers')
    })

    it('can create a product instance with default values', async () => {
      const item = await Product.create({
        name: 'FSA'
      })
      expect(item.name).to.be.equal('FSA')
      expect(item.description).to.be.equal('Much product, much wow!')
      expect(item.imageUrl).to.be.equal(
        'https://www.flaticon.com/svg/vstatic/svg/1274/1274860.svg?token=exp=1610559388~hmac=85e15df3cecccc2b4e65ba64d09a2b97'
      )
      expect(item.msrp).to.be.equal(1)
      expect(item.rating).to.be.equal(0)
      expect(item.stock).to.be.equal(1)
      expect(item.category).to.be.equal('Pins')
    })
  })
})
