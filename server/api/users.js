const router = require('express').Router()
const {User} = require('../db/models')
const {Op} = require('sequelize')

router.get('/', async (req, res, next) => {
  try {
    console.log('req.user -->', req.user.id)
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      where: {
        id: {
          [Op.ne]: req.user.id
        }
      },
      attributes: ['id', 'name', 'email', 'isAdmin']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.post('/update', async (req, res, next) => {
  try {
    console.log('updating')
    const {user} = req.body
    console.log({req: req.body})
    res.json({user})
  } catch (err) {
    next(err)
  }
})

module.exports = router
