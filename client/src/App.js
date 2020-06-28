import React from 'react';
import NumPad from './components/NumPad/NumPad.js';
import './App.css';
import Instruction from './components/Instruction/index.js';

export default function App() {
	return (
		<>
			<h1 className='heading'> STUCKED ?? Call for a SUPERHERO for rescue.</h1>
			<div className='App'>
				<NumPad />
			</div>
			<Instruction />
		</>
	);
}
