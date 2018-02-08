const Sequelize = require('sequelize');
const { env, db } = require('../config/environment');
const connectionString = db[env];
const sequelize = new Sequelize(connectionString);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
