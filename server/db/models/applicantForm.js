const Sequelize = require('sequelize');
const db = require('../config')

// needs form_id, applicant_id!
//form, applicant hasmany applicationform!
//application form belongsto form, applicant!
//comment belongsto application form !
//application form hasmany comment!
//app resp. belongsto application form !
//app. form hasmany app. resp. !

module.exports = db.define('applicantForm', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  status: {
    type: Sequelize.ENUM,
    values: ['New', 'In Review', 'Rejected', 'Approved'],
    defaultValue: 'New',
    allowNull: false
  }
});