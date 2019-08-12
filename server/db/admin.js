const Sequelize = require('sequelize');
const db = require('./db');

const Admin = db.define('admin', {
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

module.exports = Admin;