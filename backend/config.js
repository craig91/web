const Sequelize = require("sequelize");
const sequelize = new Sequelize('Users', 'root', 'Nastynas123', {
    host: 'localhost',
    dialect: 'mysql'
});
sequelize.authenticate().then(function(errors){ console.log(errors)});

module.exports = sequelize;