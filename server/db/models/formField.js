const Sequelize = require('sequelize');
const db = require('../config');

//needs association with form

//tag type ?
//input, textarea !
//other settings: json !
module.exports = db.define('form_field', {
  tag: {
    type: Sequelize.ENUM,
    values: ['input', 'textarea'],
    defaultValue: 'input',
    allowNull: false
  },
  question: {
    type: Sequelize.STRING,
    allowNull: false
  },
  class: {
    type: Sequelize.STRING
  },
  other_setting: {
    type: Sequelize.JSON
  }
})