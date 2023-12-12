// const sequelize = require('sequelize');
// const mysql = require('mysql2');
// var db = new sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_password);
// dotenv.config();

// const dbConection = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
//     host: process.env.DB_HOST,
//     dialect: process.env.DB_DIALECT,
// });


// module.exports = dbConection;
const Sequelize = require('sequelize');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables from .env file

const dbConnection = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
});

module.exports = dbConnection;
