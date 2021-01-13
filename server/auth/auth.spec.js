const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const User = db.model('user')

describe('Auth routes', () => {
  beforeEach(async () => {
    db.sync()
    await Promise.all([
      User.create({email: 'cody@email.com', password: '123'}),
      User.create({email: 'murphy@email.com', password: '123'})
    ])
  })

  describe('/auth/login/', () => {
    it('POST /auth/login SUCCESS', async () => {
      const res = await request(app)
        .post('/auth/login')
        .send({email: 'cody@email.com', password: '123'})
        .expect(200)
      expect(res.body.id).to.be.equal(2)
      expect(res.body.email).to.be.equal('cody@email.com')
    })

    // it('POST /auth/login EMAIL FAILURE', async () => {
    //   const res = await request(app)
    //     .post('/auth/login')
    //     .send({email: 'ody@email.com', password: '123'})
    //     .expect(401)
    //   expect(res.text).to.be.equal('Wrong username and/or password')
    // })

    // it('POST /auth/login PASSWORD FAILURE', async () => {
    //   const res = await request(app)
    //     .post('/auth/login')
    //     .send({email: 'cody@email.com', password: '12'})
    //     .expect(401)
    //   expect(res.text).to.be.equal('Wrong username and/or password')
    // })
  })

  describe('/auth/signup', () => {
    it('POST /auth/signup SUCCESS', async () => {
      const res = await request(app)
        .post('/auth/signup')
        .send({email: 'test@email.com', password: 'password'})
        .expect(200)
      expect(res.body.email).to.be.equal('test@email.com')
    })

    // it('POST /auth/signup FAILURE', async () => {
    //   const res = await request(app)
    //     .post('/auth/signup')
    //     .send({email: 'cody@email.com', password: '123'})
    //     .expect(401)
    //   expect(res.text).to.be.equal('User already exists')
    // })
  })

  describe('/auth/logout', () => {
    beforeEach(async () => {
      await request(app)
        .post('/auth/login')
        .send({email: 'cody@email.com', password: '123'})
    })

    it('POST /auth/logout SUCCESS', async () => {
      await request(app)
        .post('/auth/logout')
        .expect(200)
    })

    // it('POST /auth/signup FAILURE', async () => {
    //   const res = await request(app)
    //     .post('/auth/signup')
    //     .send({email: 'cody@email.com', password: '123'})
    //     .expect(401)
    //   expect(res.text).to.be.equal('User already exists')
    // })
  })
})
