const express = require('express');
const Checkout = require('../model/checkout');
const router = express.Router();

router.post('/', async (req,res) => {
  console.log(req.body);
  try {
    const checkout = await Checkout.create(req.body);
    res.json({
        success: true,
        checkout
    });
} catch (err) {
    res.status(500).json({
        success: false,
        error: err.message
    });
}
})

<<<<<<< HEAD
module.exports = router;
=======
module.exports = router;
>>>>>>> a848f6adc258a50d4790bbc761618a237159b41e
