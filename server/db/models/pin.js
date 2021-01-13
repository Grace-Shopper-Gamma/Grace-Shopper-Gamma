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
      'https://www.flaticon.com/svg/vstatic/svg/891/891448.svg?token=exp=1610479981~hmac=02dd2421d9afc0aadfa973d68ce812bb'
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false,
    validate: {
      min: 0
    },
    defaultValue: 0
  },
  quantity: {
    type: Sequelize.INTEGER,
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
