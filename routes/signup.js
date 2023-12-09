const express = require('express');
const signup = express.Router();
const login = express.Router();
const userModel = require('../model/user');

// registrasi
signup.post('/signup', async (req, res) => {
    try {
        const user = await userModel.create(req.body);
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



module.exports = {
    signup,
};