const Sequelize = require('sequelize');
const db = require('../config');

//application_form_id, comment_id, admin_id
module.exports = db.define('comment', {
  body: {
    type: Sequelize.TEXT
  }
})