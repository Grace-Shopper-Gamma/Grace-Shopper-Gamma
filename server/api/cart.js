const router = require('express').Router()
const {Cart} = require('../db')

// GET /api/cart
router.get('/', async (req, res, next) => {
  try {
    const cart = await Cart.findAll()
    res.json(cart)
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
    const cartItem = await Cart.findByPk(id)
    await cartItem.destroy()
    res.send(cartItem)
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
