const express = require('express')
const router = express.Router()

// Routes
router.get('/', (req, res) => {
    res.send('We are on Home');
});

module.exports = router;