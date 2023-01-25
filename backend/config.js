const Sequelize = require("sequelize");
const sequelize = new Sequelize('USERS', 'root', 'Nastynas123', {
    host: 'localhost',
    dialect: 'mysql2'
});

module.exports = sequelize;