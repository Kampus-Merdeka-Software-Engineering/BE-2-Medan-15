const express = require('express');
const Registration = require('../model/user');

//registrasi
async function signup(req, res) {
    try {
        const registration = await Registration.create(req.body);
        res.json({
            success: true,
            registration
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err.message
        });
    }
}


// login
async function login(req, res) {
    const user = await Registration.findOne({
        where: {
            user_name: req.body.user_name,
            password: req.body.password
        }
    })
    res.status(200).json({
        data: user
    })
}

module.exports = {
    signup,
    login
};