const Sequelize = require("sequelize")

const db = new Sequelize('expensetracker', 'root', 'password', {
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = db;