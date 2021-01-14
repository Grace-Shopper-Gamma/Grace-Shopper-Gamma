const Sequelize = require('sequelize')
const db = require('../db')

const Cart = db.define('item', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  description: {
    type: Sequelize.TEXT
  },
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue:
      'https://upload.wikimedia.org/wikipedia/commons/e/ec/Happy_smiley_face.png'
  },
  // good choice of DECIMAL - beware that SQL will store decimals nicely for transactions
  // but JS will NOT - so you may still have to round incoming data on the frontend
  price: {
    type: Sequelize.DECIMAL(4, 2),
    validate: {
      min: 0
    }
  },
  quantity: {
    type: Sequelize.INTEGER,
    validate: {
      min: 1
    }
  },
  total: {
    type: Sequelize.DECIMAL,
    validate: {
      min: 1
    }
  }
})

module.exports = Cart
