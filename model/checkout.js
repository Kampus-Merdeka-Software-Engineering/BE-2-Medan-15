const dbConection = require('./dbConnection');
const sequelize = require('sequelize');

// nama tabel database
const checkOut = dbConection.define("checkout", {
    id: {
        type: sequelize.DataTypes.INTEGER,
        primaryKey: true
    },
    email: {
        type: sequelize.DataTypes.STRING,
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