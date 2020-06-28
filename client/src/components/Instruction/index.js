import React from 'react';

import './styles.css';

export default function Instruction() {
	return (
		<div className='instruction-container'>
			<h1> Instruction </h1>
			<p> 01. Type a code to call a Superhero for your recue</p>
			<p>
				02. Type the code start with 0 followed by code <b>{`0 <code>`}</b>
			</p>
			<p> 03. If No Superhero appears , try with a different Code</p>
			<h3> Best Of Luck</h3>
		</div>
	);
}
