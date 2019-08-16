const Sequelize = require('sequelize');
const db = require('../config');

//application_form_id, comment_id, admin_id
//comment belongsto admin !
//admin hasmany comment !

//comment belongsto application form !

module.exports = db.define('comment', {
  body: {
    type: Sequelize.TEXT,
    allowNull: false  
  }
})