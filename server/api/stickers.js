const router = require('express').Router()
const {Sticker} = require('../db/models')
const {Op} = require('sequelize')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const stickers = await Sticker.findAll({
      where: {
        stock: {
          [Op.ne]: 0
        }
      },
      attributes: {exclude: ['stock', 'description']}
    })
    res.json(stickers)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const sticker = await Sticker.findByPk(req.params.id)
    res.send(sticker)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const sticker = await Sticker.create(req.body)
    res.send(sticker)
  } catch (error) {
    if (error.name === 'SequelizeUniqueContraintError') {
      res.status(401).send('Sticker already exists')
    } else {
      next(error)
    }
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    const [num, result] = await Sticker.update(req.body, {
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
    const result = await Sticker.destroy({
      where: {
        id: req.params.id
      }
    })
    if (result) res.sendStatus(204)
  } catch (error) {
    next(error)
  }
})
