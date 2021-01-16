const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  amount: {
    defaultValue: 1,
    type: Sequelize.DECIMAL(5, 2),
    allowNull: false
  },
  orderDate: {
    defaultValue: Date.now(),
    type: Sequelize.DATEONLY
  }
})

module.exports = Order
