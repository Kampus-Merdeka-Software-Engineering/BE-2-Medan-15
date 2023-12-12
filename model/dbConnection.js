const Sequelize = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const dbConnection = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT
});

module.exports = dbConnection;
