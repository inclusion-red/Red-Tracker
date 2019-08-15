const Sequelize = require('sequelize');
const db = require('../config');

//default value: false

//form belongstomany admin!
//admin belongstomany form!
//form hasmany form field!
//form field belongsto form!
//form hasmany application form!
//app. form belongsto form!


module.exports = db.define('form', {
  active: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false
  }
})