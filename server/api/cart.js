const router = require('express').Router()
const {Cart, User} = require('../db/models')

// GET /api/cart
router.get('/', async (req, res, next) => {
  try {
    const user = req.body
    const items = await user.getProducts()
    res.json(items)
  } catch (error) {
    next(error)
  }
})

// GET /api/cart/:id
router.get('/:userId', async (req, res, next) => {
  const {userId} = req.params
  try {
    const user = await User.findByPk(userId)
    const items = await user.getProducts()
    res.json(items)
  } catch (error) {
    next(error)
  }
})

// POST /api/cart
router.post('/:id', async (req, res, next) => {
  try {
    const user = req.body
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
    const user = await User.findByPk(1)
    await user.removeProduct(id)
    res.status(200).send(id)
  } catch (error) {
    next(error)
  }
})

// PUT /api/cart/:id
router.put('/:id', async (req, res, next) => {
  console.log('got here')
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
