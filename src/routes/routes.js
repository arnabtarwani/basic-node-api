const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/hello.html', (req, res) => {
    // res.json({
    //     message: 'Welcome to Explore Shacklen API!',
    // });
    res.sendFile(path.join(__dirname + '../../../public/index.html'));
});

module.exports = router;