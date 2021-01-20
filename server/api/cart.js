const router = require('express').Router()
const {Cart, User, Order} = require('../db/models')

// GET /api/cart
router.get('/', async (req, res, next) => {
  try {
    const userId = req.user ? req.user.id : 1
    const order = await Order.findOrCreate({
      where: {
        userId: userId,
        status: 'PENDING'
      }
    })
    res.send(await order[0].getProducts())
  } catch (error) {
    next(error)
  }
})

// GET /api/cart/:id
router.get('/:userId', async (req, res, next) => {
  try {
    const userId = req.user ? req.user.id : 1
    const user = await User.findByPk(userId)
    const items = await user.getProducts()
    res.json(items)
  } catch (error) {
    next(error)
  }
})

router.put('/', async (req, res, next) => {
  try {
    const userId = req.user ? req.user.id : 1
    const order = await Order.findOne({
      where: {
        userId: userId,
        status: 'PENDING'
      }
    })
    await Order.update({status: 'ORDERED'}, {where: {id: order.id}})
    res.sendStatus(200)
  } catch (error) {
    next(error)
  }
})

// POST /api/cart
router.post('/:id', async (req, res, next) => {
  try {
    const userId = req.user ? req.user.id : 1
    const order = await Order.findOrCreate({
      where: {
        userId: userId,
        status: 'PENDING'
      }
    })
    await order[0].addProduct(req.params.id).then(() => res.sendStatus(200))
  } catch (error) {
    next(error)
  }
})

// DELETE /api/cart/:id
router.delete('/:id', async (req, res, next) => {
  const {id} = req.params
  try {
    const userId = req.user ? req.user.id : 1
    const order = await Order.findOne({
      where: {
        userId: userId,
        status: 'PENDING'
      }
    })
    await order.removeProduct(id)
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
    const updatedItem = await cartItem.update(req.body)
    res.send(updatedItem)
  } catch (error) {
    next(error)
  }
})

module.exports = router
