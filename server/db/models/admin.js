const Sequelize = require('sequelize');
const db = require('../config');

module.exports = db.define('admin', {
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
})
