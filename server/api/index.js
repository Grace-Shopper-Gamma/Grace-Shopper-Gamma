const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))

router.use('/products', require('./products'))

router.use('/cart', require('./cart'))

router.use('/checkout', require('./order'))

router.use('/orders', require('./orderhistory'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
