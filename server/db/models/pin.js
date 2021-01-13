const Sequelize = require('sequelize')
const db = require('../db')

const Pin = db.define('pin', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    defaultValue: 'What a lovely pin!'
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      'https://www.flaticon.com/svg/vstatic/svg/1274/1274860.svg?token=exp=1610559388~hmac=85e15df3cecccc2b4e65ba64d09a2b97'
  },
  price: {
    type: Sequelize.FLOAT,
    validate: {
      min: 0
    },
    defaultValue: 0
  },
  rating: {
    type: Sequelize.FLOAT,
    validate: {
      min: 0,
      max: 5
    },
    defaultValue: 0
  },
  stock: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0
    },
    defaultValue: 1
  }
})

module.exports = Pin
