const Sequelize = require('sequelize')
const db = require('../db')

const Cart = db.define('item', {
  sellPrice: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 1
    },
    defaultValue: 1
  },
  status: {
    type: Sequelize.ENUM('Pins', 'Stickers'),
    allowNull: false,
    defaultValue: 'Pins'
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
