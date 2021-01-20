const router = require('express').Router()
const {Order, Cart} = require('../db/models')

// GET /api/orders
router.get('/', async (req, res, next) => {
  try {
    const userId = req.session.passport ? req.session.passport.user : 1
    const orders = await Order.findAll({
      where: {
        userId: userId,
        status: 'ORDERED'
      }
    })
    res.send(orders)
  } catch (error) {
    next(error)
  }
})

// GET /api/orders/:id
router.get('/:id', async (req, res, next) => {
  try {
    const {id} = req.params
    const items = await Cart.findAll({
      where: {
        orderId: id
      }
    })
    res.send(items)
  } catch (error) {
    next(error)
  }
})

module.exports = router
