const router = require('express').Router()
const {Pin} = require('../db/models')
const {Op} = require('sequelize')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const pins = await Pin.findAll({
      // where: {
      //   [Op.ne]: 0,
      // },
      attributes: ['name', 'imageUrl', 'price']
    })
    res.send(pins)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const pin = await Pin.findByPk({
      where: {id: req.params.id},
      attributes: ['name', 'description', 'imageUrl', 'price', 'rating']
    })
    res.send(pin)
  } catch (error) {
    next(error)
  }
})
