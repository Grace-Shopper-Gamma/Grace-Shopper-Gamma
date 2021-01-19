const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  status: {
    type: Sequelize.ENUM('PENDING', 'ORDERED'),
    allowNull: false,
    defaultValue: 'PENDING'
  },
  confirmation: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4
  }
})

module.exports = Order
