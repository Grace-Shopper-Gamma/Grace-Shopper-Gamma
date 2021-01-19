const router = require('express').Router()
const {User} = require('../db/models')

// don't forget to put admin middleware here too
router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
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
