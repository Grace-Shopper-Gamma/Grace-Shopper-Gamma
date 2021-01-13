const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Pin = db.model('pin')

describe('Pin routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('GET /api/pins/', () => {
    const data = [{name: 'FSA'}, {name: 'Test', stock: 0}]

    beforeEach(() => {
      return Pin.bulkCreate(data)
    })

    it('GET /api/pins', async () => {
      const res = await request(app)
        .get('/api/pins')
        .expect(200)

      expect(res.body).to.be.an('array')
      expect(res.body.length).to.be.equal(1)
      expect(res.body[0].name).to.be.equal('FSA')
      expect(res.body[0].imageUrl).to.be.equal(
        'https://www.flaticon.com/svg/vstatic/svg/891/891448.svg?token=exp=1610479981~hmac=02dd2421d9afc0aadfa973d68ce812bb'
      )
      expect(res.body[0].price).to.be.equal(0)
    })

    it('GET /api/pins/:id', async () => {
      const res = await request(app)
        .get('/api/pins/2')
        .expect(200)

      expect(res.body[0].name).to.be.equal('Test')
      expect(res.body[0].imageUrl).to.be.equal(
        'https://www.flaticon.com/svg/vstatic/svg/891/891448.svg?token=exp=1610479981~hmac=02dd2421d9afc0aadfa973d68ce812bb'
      )
      expect(res.body[0].price).to.be.equal(0)
    })
  })

  describe('POST /api/pins/', () => {
    it('can create a new pin', async () => {
      const res = await request(app)
        .post('/api/pins')
        .send({name: 'Testing create'})
      expect(res.body.name).to.be.equal('Testing create')
    })
  })

  describe('PUT /api/pins/:id', () => {
    const data = [{name: 'FSA'}, {name: 'Test', stock: 0}]

    beforeEach(() => {
      return Pin.bulkCreate(data)
    })

    it('can update a pin', async () => {
      const res = await request(app)
        .put('/api/pins/1')
        .send({name: 'New Name', description: 'Testing update'})

      expect(res.body[0].name).to.be.equal('New Name')
      expect(res.body[0].description).to.be.equal('Testing update')
    })
  })

  describe('DELETE /api/pins/:id', () => {
    const data = [{name: 'FSA'}, {name: 'Test', stock: 0}]

    beforeEach(() => {
      return Pin.bulkCreate(data)
    })

    it('can delete a pin', async () => {
      await request(app)
        .delete('/api/pins/1')
        .expect(204)
    })
  })
})
