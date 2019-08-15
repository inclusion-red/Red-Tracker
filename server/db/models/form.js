const Sequelize = require('sequelize');
const db = require('../config');

module.exports = db.define('form', {
  active: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  }
})