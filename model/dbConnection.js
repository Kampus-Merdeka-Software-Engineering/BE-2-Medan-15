const sequelize = require('sequelize');
const mysql = require('mysql2');

const dbConection = new sequelize('signup_db', 'root', 'Aleram123', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3000
});

module.exports = dbConection;