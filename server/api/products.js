const router = require('express').Router()
const {Product} = require('../db/models')
const {Op} = require('sequelize')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const items = await Product.findAll({
      where: {
        stock: {
          [Op.ne]: 0
        }
      },
      attributes: {exclude: ['stock', 'description']}
    })
    res.send(items)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const item = await Product.findByPk(req.params.id)
    res.send(item)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const item = await Product.create(req.body)
    res.send(item)
  } catch (error) {
    if (error.name === 'SequelizeUniqueContraintError') {
      res.status(401).send('Pin already exists')
    } else {
      next(error)
    }
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    const [num, result] = await Product.update(req.body, {
      where: {
        id: req.params.id
      },
      returning: true
    })
    if (num) res.send(result)
  } catch (error) {
    next(error)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const result = await Product.destroy({
      where: {
        id: req.params.id
      }
    })
    if (result) res.sendStatus(204)
  } catch (error) {
    next(error)
  }
})
