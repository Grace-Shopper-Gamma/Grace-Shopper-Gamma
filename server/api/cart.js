const router = require('express').Router()
const {Cart, User, Product} = require('../db/models')

// GET /api/cart
router.get('/', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.session.passport.user)
    const items = await user.getProducts()
    res.json(items.filter(item => item.item.status === 'PENDING'))
  } catch (error) {
    next(error)
  }
})

// GET /api/cart/:id
router.get('/:userId', async (req, res, next) => {
  try {
    const user = await User.findByPk(1)
    const items = await user.getProducts()
    res.json(items)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const cart = await Cart.findAll({
      where: {
        userId: 1,
        status: 'PENDING'
      }
    })
    await Promise.all([
      cart.map(item => Cart.update({status: 'ORDERED'}, {where: {id: item.id}}))
    ])
    res.sendStatus(200)
  } catch (error) {
    next(error)
  }
})

// POST /api/cart
router.post('/:id', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.session.passport.user)
    await user.addProduct(req.params.id).then(async () =>
      res.json(
        await user.getProducts({
          where: {
            id: req.params.id
          }
        })
      )
    )
  } catch (error) {
    next(error)
  }
})

// DELETE /api/cart/:id
router.delete('/:id', async (req, res, next) => {
  const {id} = req.params
  try {
    const user = await User.findByPk(req.session.passport.user)
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
    await cartItem.update(req.body)
    res.send(id)
  } catch (error) {
    next(error)
  }
})

module.exports = router
