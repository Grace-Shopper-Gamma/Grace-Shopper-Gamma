const Sequelize = require('sequelize')
const db = require('../db')

const Sticker = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    defaultValue: 'No information provided yet.'
  },
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.4vVQ-f7JLBYwQT9YDogBfQHaHa%26pid%3DApi&f=1'
  },
  price: {
    type: Sequelize.DECIMAL,
    allowNull: false,
    validate: {
      min: 0
    }
  },
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
})

module.exports = Sticker
