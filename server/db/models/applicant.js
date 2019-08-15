const Sequelize = require('sequelize');
const db = require('../config');

module.exports = db.define('applicant', {
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  status: {
    type: Sequelize.STRING,
    allowNull: false
  }
})