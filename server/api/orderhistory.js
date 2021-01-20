const router = require('express').Router()
const {Order} = require('../db/models')

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
    let products = []
    for (let i = 0; i < orders.length; i++) {
      let each = await orders[i].getProducts()
      products.push(each)
    }
    const allOrders = [orders, products]
    res.send(allOrders)
  } catch (error) {
    next(error)
  }
})

module.exports = router
