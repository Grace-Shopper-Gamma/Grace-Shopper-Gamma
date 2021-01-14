const User = require('./user')
const Pin = require('./pin')
const Sticker = require('./sticker')
const Cart = require('./cart')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */


// what if a user wants to order from our store more than once?

// Cart.belongsTo(User)
// User.hasOne(Cart)

module.exports = {
  User,
  Pin,
  Sticker,
  Cart
}
