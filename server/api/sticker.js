const router = require('express').Router()
const {Sticker} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const stickers = await Sticker.findAll({
      attributes: ['id', 'name']
    })
    res.json(stickers)
  } catch (err) {
    next(err)
  }
})
