const Sequelize = require('sequelize');
require('dotenv').config();
let config = null;
if (process.env.NODE_ENV === 'production') {
  config = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    logging: false
  });
} else {
  config = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USERNAME, process.env.DATABASE_PASSWORD, {
    dialect: 'postgres',
    logging: false
  });
}

module.exports = config;
