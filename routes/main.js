const express = require('express');

const superHeros = [
	'SUPERMAN',
	'HULK',
	'SPIDERMAN',
	'BATMAN',
	'THOR',
	'IRONMAN',
	'GHOSTRIDER',
	'BLADE',
	'PHANTOM',
	'BLACKWIDOW',
	'FLASH',
	'CAPTAINAMERICA',
	'WOLVERINE',
	'PUNISHER',
	'HELLBOY',
	'ROBIN'
];
const router = express.Router();

// @desc   Test the API
// @route  GET /api/superhero
// @access Public
router.get('/', (req, res) => {
	res.send('API Running fine');
});

// @desc   Get SuperHero
// @route  POST /api/superhero
// @access Public
router.post('/', (req, res) => {
	const { code } = req.body;

	// Remove duplicate values
	const newCode = [...new Set(code)].join('');

	let match = superHeros.find((hero) => {
		let match = true;
		for (let i = 0; i < hero.length; i++) {
			if (!newCode.includes(hero[i])) match = false;
		}
		if (match) return hero;
	});

	if (!match) {
		return res.status(404).json({
			success: false,
			data: 'No Superhero found'
		});
	}
	res.status(200).json({
		success: true,
		data: match
	});
});

module.exports = router;
