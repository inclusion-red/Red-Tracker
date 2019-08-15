const Sequelize = require('sequelize');
const db = require('../config');

//needs association with form

//tag type ?
module.exports = db.define('form_field', {
  tag: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  other_setting: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  }
})