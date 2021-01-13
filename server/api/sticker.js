const router = require('express').Router()
const {Sticker} = require('../db/models')

// GET /api/sticker
router.get('/', async (req, res, next) => {
  try {
    const stickers = await Sticker.findAll({})
    res.json(stickers)
  } catch (err) {
    next(err)
  }
})

// GET /api/sticker/:id
router.get('/:id', async (req, res, next) => {
  const {id} = req.params
  try {
    const sticker = await Sticker.findByPk(id)
    res.json(sticker)
  } catch (err) {
    next(err)
  }
})

// POST /api/sticker
router.post('/', async (req, res, next) => {
  try {
    const addSticker = await sticker.create(req.body)
    res.json(addSticker)
  } catch (error) {
    next(error)
  }
})

// DELETE /api/sticker/:id
router.delete('/:id', async (req, res, next) => {
  const {id} = req.params
  try {
    const stickerItem = await sticker.findByPk(id)
    await stickerItem.destroy()
    res.send(stickerItem)
  } catch (error) {
    next(error)
  }
})

// PUT /api/sticker/:id
router.put('/:id', async (req, res, next) => {
  const {id} = req.params
  try {
    const stickerItem = await sticker.findByPk(id)
    res.send(await stickerItem.update(req.body))
  } catch (error) {
    next(error)
  }
})
module.exports = router
