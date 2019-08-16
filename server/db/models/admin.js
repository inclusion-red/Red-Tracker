const Sequelize = require("sequelize");
const db = require("../config");

module.exports = db.define("admin", {
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  hash: {
    type: Sequelize.STRING
  },
  salt: {
    type: Sequelize.STRING
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});
