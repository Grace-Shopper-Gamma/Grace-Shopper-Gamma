const {expect} = require('chai')
const db = require('../index')
const Pin = db.model('pin')

describe.only('Pin model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('Creation', () => {
    it('can create a pin instance with given values', async () => {
      const pin = await Pin.create({
        name: 'FSA',
        description: 'Fullstack Academy',
        imageUrl:
          'https://pbs.twimg.com/profile_images/1145685694238605312/q4JCNy_X_400x400.jpg',
        rating: 5,
        stock: 9001,
        price: 18000
      })
      expect(pin.name).to.be.equal('FSA')
      expect(pin.description).to.be.equal('Fullstack Academy')
      expect(pin.imageUrl).to.be.equal(
        'https://pbs.twimg.com/profile_images/1145685694238605312/q4JCNy_X_400x400.jpg'
      )
      expect(pin.rating).to.be.equal(5)
      expect(pin.stock).to.be.equal(9001)
      expect(pin.price).to.be.equal(18000)
    })

    it('can create a pin instance with default values', async () => {
      const pin = await Pin.create({
        name: 'FSA'
      })
      expect(pin.name).to.be.equal('FSA')
      expect(pin.description).to.be.equal('What a lovely pin!')
      expect(pin.imageUrl).to.be.equal(
        'https://www.flaticon.com/svg/vstatic/svg/891/891448.svg?token=exp=1610479981~hmac=02dd2421d9afc0aadfa973d68ce812bb'
      )
      expect(pin.rating).to.be.equal(0)
      expect(pin.stock).to.be.equal(1)
      expect(pin.price).to.be.equal(0)
    })
  })
})
