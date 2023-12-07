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
    nama_depan: {
        type: sequelize.DataTypes.STRING
    },
    nama_belakang: {
        type: sequelize.DataTypes.STRING
    },
    nomor_telepon: {
        type: sequelize.DataTypes.STRING
    },
    jenis_kamar: {
        type: sequelize.DataTypes.STRING
    },
    jumlah_kamar: {
        type: sequelize.DataTypes.STRING
    },
    Checkin: {
        type: sequelize.DataTypes.DATE
    },
    checkout: {
        type: sequelize.DataTypes.DATE
    },
}}, {
    freezeTableName: true,
    timestamps: false
});
module.exports = checkOut;