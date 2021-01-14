const Sequelize = require('sequelize')
const db = require('../db')

const Cart = db.define('item', {
  sellPrice: {
    type: Sequelize.DECIMAL(5, 2),
    allowNull: false,
    validate: {
      min: 1
    },
    defaultValue: 1
  },
  status: {
    type: Sequelize.ENUM('PENDING', 'ORDERED'),
    allowNull: false,
    defaultValue: 'PENDING'
  },
  quantity: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0
    },
    defaultValue: 0
  }
})

module.exports = Cart
