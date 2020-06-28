const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
	res.send('API Running fine');
});

module.exports = router;
