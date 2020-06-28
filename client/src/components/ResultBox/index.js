import React from 'react';

import './styles.css';

export default function ResultBox({ superHero }) {
	return (
		<div className='container'>
			<p className='result'> {superHero} </p>
		</div>
	);
}
