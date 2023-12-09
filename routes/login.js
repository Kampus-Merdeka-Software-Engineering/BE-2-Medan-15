const express = require('express');
const login = express.Router();
const registration = require('../model/user');

login.post('/', async function(req, res) {
    const user = await registration.findOne({
        where: {
            email: req.body.email,
            password: req.body.password
        }
    })
    res.status(200).json({
        data: user
    })
});

module.exports = login;