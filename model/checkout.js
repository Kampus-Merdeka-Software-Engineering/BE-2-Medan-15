const dbConection = require('./dbConnection');
const sequelize = require('sequelize');

// nama tabel database
const checkOut = dbConection.define("checkout", {
    id: {
        type: sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement : true
    },
    email: {
<<<<<<< HEAD
        type: sequelize.DataTypes.STRING
    },
    firstName: {
        type: sequelize.DataTypes.STRING
    },
    lastName: {
        type: sequelize.DataTypes.STRING
    },
    phone: {
        type: sequelize.DataTypes.STRING
    },
    productName: {
        type: sequelize.DataTypes.STRING
    },
    productPrice: {
        type: sequelize.DataTypes.STRING
    },
=======
        type: sequelize.DataTypes.STRING,
    firstname: {
        type: sequelize.DataTypes.STRING
    },
    lastname: {
        type: sequelize.DataTypes.STRING
    },
    phone: {
        type: sequelize.DataTypes.STRING
    },
    productName: {
        type: sequelize.DataTypes.STRING
    },
    productPrice: {
        type: sequelize.DataTypes.STRING
    },
>>>>>>> a848f6adc258a50d4790bbc761618a237159b41e
    quantity: {
        type: sequelize.DataTypes.STRING
    },
    checkIn: {
        type: sequelize.DataTypes.DATE
    },
    checkOut: {
        type: sequelize.DataTypes.DATE
    },
}, {
    freezeTableName: true,
    timestamps: false
});

(async () => {
    await checkOut.sync()
})()

module.exports = checkOut;