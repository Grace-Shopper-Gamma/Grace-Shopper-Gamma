const Sequelize = require('sequelize')
const db = require('../db')

const Cart = db.define('item', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
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
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: true,
    validate: {
      notEmpty: false
    }
  },
  orderId: {
    type: Sequelize.INTEGER,
    allowNull: true,
    validate: {
      notEmpty: false
    }
  },
  productId: {
    type: Sequelize.INTEGER,
    allowNull: true,
    validate: {
      notEmpty: false
    }
  }
})

module.exports = Cart
