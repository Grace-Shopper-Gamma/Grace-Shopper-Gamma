const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Product = db.model('product')

describe('Pin routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('GET /api/products/', () => {
    const data = [{name: 'FSA'}, {name: 'Test', stock: 0, category: 'Stickers'}]

    beforeEach(() => {
      return Product.bulkCreate(data)
    })

    it('GET /api/products', async () => {
      const res = await request(app)
        .get('/api/products')
        .expect(200)

      expect(res.body).to.be.an('array')
      expect(res.body.length).to.be.equal(1)
      expect(res.body[0].name).to.be.equal('FSA')
      expect(res.body[0].imageUrl).to.be.equal(
        'https://www.flaticon.com/svg/vstatic/svg/1274/1274860.svg?token=exp=1610559388~hmac=85e15df3cecccc2b4e65ba64d09a2b97'
      )
      expect(res.body[0].msrp).to.be.equal(1)
      expect(res.body[0].rating).to.be.equal(0)
      expect(res.body[0].category).to.be.equal('Pins')
    })

    it('GET /api/products/:id', async () => {
      const res = await request(app)
        .get('/api/products/2')
        .expect(200)

      expect(res.body.name).to.be.equal('Test')
      expect(res.body.imageUrl).to.be.equal(
        'https://www.flaticon.com/svg/vstatic/svg/1274/1274860.svg?token=exp=1610559388~hmac=85e15df3cecccc2b4e65ba64d09a2b97'
      )
      expect(res.body.msrp).to.be.equal(1)
      expect(res.body.rating).to.be.equal(0)
      expect(res.body.category).to.be.equal('Stickers')
    })
  })

  describe('POST /api/products/', () => {
    it('can create a new pin', async () => {
      const res = await request(app)
        .post('/api/products')
        .send({name: 'Testing create'})
      expect(res.body.name).to.be.equal('Testing create')
    })
  })

  describe('PUT /api/products/:id', () => {
    const data = [{name: 'FSA'}, {name: 'Test', stock: 0}]

    beforeEach(() => {
      return Product.bulkCreate(data)
    })

    it('can update a products', async () => {
      const res = await request(app)
        .put('/api/products/1')
        .send({name: 'New Name', description: 'Testing update'})

      expect(res.body[0].name).to.be.equal('New Name')
      expect(res.body[0].description).to.be.equal('Testing update')
    })
  })

  describe('DELETE /api/products/:id', () => {
    const data = [{name: 'FSA'}, {name: 'Test', stock: 0}]

    beforeEach(() => {
      return Product.bulkCreate(data)
    })

    it('can delete a product', async () => {
      await request(app)
        .delete('/api/products/1')
        .expect(204)
    })
  })
})
