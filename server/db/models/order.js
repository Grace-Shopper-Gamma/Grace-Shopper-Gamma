const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  status: {
    type: Sequelize.ENUM('PENDING', 'ORDERED'),
    allowNull: false,
    defaultValue: 'PENDING'
  }
})

module.exports = Order
