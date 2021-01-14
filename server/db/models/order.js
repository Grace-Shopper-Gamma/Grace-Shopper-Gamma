const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  amount: {
    type: Sequelize.DECIMAL(5, 2),
    allowNull: false
  },
  orderDate: {
    type: Sequelize.DATEONLY
  }
})

module.exports = Order
