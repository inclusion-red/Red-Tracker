const Sequelize = require('sequelize');
const db = require('../config')

// needs form_id, applicant_id!
//form, applicant hasmany applicationform!
//application form belongsto form, applicant!
//comment belongsto application form !
//application form hasmany comment!
//app resp. belongsto application form !
//app. form hasmany app. resp. !

module.exports = db.define('applicant_form', {
  status: {
    type: Sequelize.ENUM,
    values: ['new', 'review', 'rejected', 'approved'],
    defaultValue: 'new',
    allowNull: false
  }
});