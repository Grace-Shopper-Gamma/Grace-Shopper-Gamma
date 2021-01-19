const router = require('express').Router()
const {Order} = require('../db/models')

router.get('/:id', async (req, res, next) => {
  try {
    const order = await Order.findByPk(req.params.id)
    res.send(order.confirmation)
  } catch (error) {
    next(error)
  }
})

module.exports = router
