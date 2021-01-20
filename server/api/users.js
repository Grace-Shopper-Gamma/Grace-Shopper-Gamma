const router = require('express').Router()
const {User} = require('../db/models')
const {Op} = require('sequelize')

router.get('/', async (req, res, next) => {
  try {
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

module.exports = router
