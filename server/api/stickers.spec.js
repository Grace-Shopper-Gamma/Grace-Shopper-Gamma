const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Sticker = db.model('sticker')

describe('Sticker routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('GET /api/stickers/', () => {
    const data = [
      {name: 'FSA Sticker Pack', price: 5},
      {name: 'Test', price: 0, quantity: 0}
    ]

    beforeEach(() => {
      return Sticker.bulkCreate(data)
    })

    it('GET /api/stickers', async () => {
      const res = await request(app)
        .get('/api/stickers')
        .expect(200)

      expect(res.body).to.be.an('array')
      expect(res.body.length).to.be.equal(2)
      expect(res.body[0].name).to.be.equal('FSA Sticker Pack')
      expect(res.body[0].imageUrl).to.be.equal(
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.4vVQ-f7JLBYwQT9YDogBfQHaHa%26pid%3DApi&f=1'
      )
      expect(res.body[0].price).to.be.equal(5)
    })

    it('GET /api/stickers/:id', async () => {
      const res = await request(app)
        .get('/api/stickers/2')
        .expect(200)

      expect(res.body.name).to.be.equal('Test')
      expect(res.body.description).to.be.equal('No information provided yet.')
      expect(res.body.imageUrl).to.be.equal(
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.4vVQ-f7JLBYwQT9YDogBfQHaHa%26pid%3DApi&f=1'
      )
      expect(res.body.price).to.be.equal(0)
      expect(res.body.quantity).to.be.equal(0)
    })
  })

  describe('POST /api/stickers/', () => {
    it('can create a new sticker', async () => {
      const res = await request(app)
        .post('/api/stickers')
        .send({name: 'Testing create'})
      expect(res.body.name).to.be.equal('Testing create')
    })
  })

  describe('PUT /api/stickers/:id', () => {
    const data = [{name: 'FSA'}, {name: 'Test', stock: 0}]

    beforeEach(() => {
      return Sticker.bulkCreate(data)
    })

    it('can update a stick', async () => {
      const res = await request(app)
        .put('/api/stickers/1')
        .send({name: 'New Name', description: 'Testing update'})

      expect(res.body[0].name).to.be.equal('New Name')
      expect(res.body[0].description).to.be.equal('Testing update')
    })
  })

  describe('DELETE /api/stickers/:id', () => {
    const data = [{name: 'FSA'}, {name: 'Test', stock: 0}]

    beforeEach(() => {
      return Sticker.bulkCreate(data)
    })

    it('can delete a sticker', async () => {
      await request(app)
        .delete('/api/stickers/1')
        .expect(204)
    })
  })
})
