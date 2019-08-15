const Sequelize = require('sequelize');
const db = require('../config')

// needs form_id, applicant_id
module.exports = db.define('application_form', {
  status: {
    type: Sequelize.STRING,
    allowNull: false
  }
});