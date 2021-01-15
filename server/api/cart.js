const router = require('express').Router()
const {Cart, User} = require('../db/models')

// GET /api/cart
router.get('/', async (req, res, next) => {
  try {
    const user = await User.findByPk(1)
    const items = await user.getProducts()
    res.json(items)
  } catch (error) {
    next(error)
  }
})

// GET /api/cart/:id
router.get('/:id', async (req, res, next) => {
  const {id} = req.params
  try {
    const cart = await Cart.findByPk(id)
    res.json(cart)
  } catch (error) {
    next(error)
  }
})

// POST /api/cart
router.post('/', async (req, res, next) => {
  try {
    const addCartItem = await Cart.create(req.body)
    res.json(addCartItem)
  } catch (error) {
    next(error)
  }
})

// DELETE /api/cart/:id
router.delete('/:id', async (req, res, next) => {
  const {id} = req.params
  try {
    const user = await User.findByPk(1)
    await user.removeProduct(id)
    res.status(200).send(id)
  } catch (error) {
    next(error)
  }
})

// PUT /api/cart/:id
router.put('/:id', async (req, res, next) => {
  const {id} = req.params
  try {
    const cartItem = await Cart.findByPk(id)
    res.send(await cartItem.update(req.body))
  } catch (error) {
    next(error)
  }
})

module.exports = router
