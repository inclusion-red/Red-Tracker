const Sequelize = require('sequelize');
const db = require('../config');

// needs application_form_id, form_id
//one app resp. belongsto one application form
//app. form hasmany app. resp.

// one app. resp. belongsto one form field !
module.exports = db.define('applicant_response', {
  input_value: {
    type: Sequelize.TEXT,
    allowNull: false
  }
})