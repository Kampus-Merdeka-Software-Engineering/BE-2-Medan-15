
const dbConnection = require('./dbConnection');
const sequelize = require('sequelize')

const registration = dbConnection.define("registration", {
    id: {
        type: sequelize.DataTypes.INTEGER,
        primaryKey: true
    },
    user_name: {
        type: sequelize.DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: sequelize.DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: sequelize.DataTypes.STRING,
        allowNull: false
    }
}, {
    freezeTableName: true,
    timestamps: false
});

// (async () => {
//     await registration.sync()
// })()


module.exports = registration;