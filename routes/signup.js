const express = require('express');
const router = express.Router();
const user = require('../model/user');

// registrasi
router.post('/signup', async (req, res) => {
    try {
        const newUser = await user.create(req.body);
        res.json({
            success: true,
            user: newUser
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err.message
        });
    }
});

module.exports = router;
