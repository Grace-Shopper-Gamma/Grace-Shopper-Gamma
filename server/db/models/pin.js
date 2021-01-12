const Sequelize = require('sequelize')
const db = require('../db')

const Pin = db.define('pin', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT
  },
  imageUrl: {
    type: Sequelize.STRING,
    default:
      'https://www.flaticon.com/svg/vstatic/svg/891/891448.svg?token=exp=1610479981~hmac=02dd2421d9afc0aadfa973d68ce812bb'
  },
  rating: {
    type: Sequelize.FLOAT,
    validate: {
      min: 0,
      max: 5
    },
    default: 0
  },
  stock: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0
    },
    default: 1
  }
})

module.exports = Pin
