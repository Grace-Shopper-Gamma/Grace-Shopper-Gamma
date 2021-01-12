const router = require('express').Router()
const {Pin} = require('../db/models')
const {Op} = require('sequelize')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const pins = await Pin.findAll({
      where: {
        stock: {
          [Op.ne]: 0
        }
      },
      attributes: ['id', 'name', 'imageUrl', 'price']
    })
    res.send(pins)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const pin = await Pin.findAll({
      where: {id: req.params.id},
      attributes: {exclude: ['stock']}
    })
    res.send(pin)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const pin = await Pin.create(req.body)
    res.send(pin)
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
    const [num, result] = await Pin.update(req.body, {
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
    const result = await Pin.destroy({
      where: {
        id: req.params.id
      }
    })
    if (result) res.sendStatus(204)
  } catch (error) {
    next(error)
  }
})
