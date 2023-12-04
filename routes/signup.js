const express = require('express');
const signup = express.Router();
const login = express.Router();
const user = require('../model/user');

// registrasi
signup.post('/signup', async (req, res) => {
    try {
        const user = await user.create(req.body);
        res.json({
            success: true,
            user
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err.message
        });
    }
});

login.post('/', async function(req, res) {
    const user = await user.findOne({
        where: {
            email: req.body.email,
            password: req.body.password
        }
    })
    res.status(200).json({
        data: user
    })
});

module.exports = {
    signup,
    login
};