const Sequelize = require('sequelize')

var sequelize = new Sequelize('tpcricket', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
})

module.exports = sequelize
