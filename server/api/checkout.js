const router = require('express').Router()
const {User} = require('../db/models')

// GET /api/checkout
router.get('/', async (req, res, next) => {
  try {
    const user = await User.findByPk(1)
    const items = await user.getProducts()
    res.json(items)
  } catch (error) {
    next(error)
  }
})

// POST /api/checkout/:id
router.post('/:id', async (req, res, next) => {
  const {id} = req.params
  try {
    const user = await User.findByPk(1)
    await user.createOrder(id)
    res.status(200).send(id)
  } catch (error) {
    next(error)
  }
})

module.exports = router
