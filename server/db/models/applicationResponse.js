const Sequelize = require('sequelize');
const db = require('../config');

// needs application_form_id, form_id
module.exports = db.define('application_response', {
  input_value: {
    type: Sequelize.TEXT,
    allowNull: false
  }
})