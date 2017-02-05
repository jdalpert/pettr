const express = require('express');
const router = express.Router();

router.use('/api/v0/sample', require('./sample'));

module.exports = router;
