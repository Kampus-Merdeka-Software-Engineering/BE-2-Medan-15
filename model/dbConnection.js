const sequelize = require('sequelize');
const mysql = require('mysql2');

const dbConection = new sequelize('signup_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = dbConection;