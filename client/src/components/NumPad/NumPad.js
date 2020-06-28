import React, { useState } from 'react';
import './NumPad.css';
import axios from 'axios';
import ResultBox from '../ResultBox';

export default function NumPad() {
	const [value, setValue] = useState('');
	const [code, setCode] = useState('');
	const [error, setError] = useState('');
	const [superHero, setSuperHero] = useState('');

	// Calling the API on Submit Button
	const handleSubmit = async () => {
		// Error handling
		if (value.length < 1 || value.split(' ')[0] !== '0') {
			setError('Invalid Input');
			setValue('');
			setCode('');
			setTimeout(() => {
				setError('');
			}, 1000);
			return;
		}
		const data = {
			code: code
		};
		// API Call
		let response = await axios.post('/api/superhero', data);
		if (response.data.success) {
			setSuperHero(`Stay Calm ! ${response.data.data} is here for your rescue`);
		} else {
			setSuperHero(
				`${response.data.data} !! Please try again with another code`
			);
		}
		setValue('');
		setCode('');
	};

	// handling pressing of  NumPad button
	const handleNumberPressed = (num, alpha) => () => {
		setValue(value + num);
		setCode(code + alpha);
	};

	// Reseting data on delete
	const handleDelete = () => {
		const newValue = value.split('');
		newValue.splice(value.length - 1, 1);
		setValue(newValue.join(''));
		const lastIndexValue = value[value.length - 1];
		if (
			lastIndexValue === '2' ||
			lastIndexValue === '3' ||
			lastIndexValue === '4' ||
			lastIndexValue === '5' ||
			lastIndexValue === '6' ||
			lastIndexValue === '8'
		) {
			const newCode = code.split('');
			newCode.splice(newCode.length - 1 - 2, 3);
			setCode(newCode.join(''));
		}
		if (lastIndexValue === '7' || lastIndexValue === '9') {
			const newCode = code.split('');
			newCode.splice(newCode.length - 1 - 3, 4);
			setCode(newCode.join(''));
		}
	};

	return (
		<div className='Numpad'>
			{superHero && <ResultBox superHero={superHero} />}
			{superHero && (
				<button onClick={() => setSuperHero('')} className='button'>
					Try Again
				</button>
			)}
			<div className='pin-login'>
				<input
					type='text'
					readOnly
					className={`pin-login__text ${
						error ? 'pin-login__text--error' : null
					}`}
					value={error ? error : value}
				/>
				<div className='pin-login__numpad'>
					<div
						className='pin-login__key'
						onClick={handleNumberPressed('1', '')}
					>
						1
					</div>
					<div
						className='pin-login__key'
						onClick={handleNumberPressed('2', 'ABC')}
					>
						{' '}
						2{' '}
					</div>
					<div
						className='pin-login__key'
						onClick={handleNumberPressed('3', 'DEF')}
					>
						{' '}
						3{' '}
					</div>
					<br />
					<div
						className='pin-login__key'
						onClick={handleNumberPressed('4', 'GHI')}
					>
						{' '}
						4{' '}
					</div>
					<div
						className='pin-login__key'
						onClick={handleNumberPressed('5', 'JKL')}
					>
						{' '}
						5{' '}
					</div>
					<div
						className='pin-login__key'
						onClick={handleNumberPressed('6', 'MNO')}
					>
						{' '}
						6{' '}
					</div>
					<br />
					<div
						className='pin-login__key'
						onClick={handleNumberPressed('7', 'PQRS')}
					>
						{' '}
						7{' '}
					</div>
					<div
						className='pin-login__key'
						onClick={handleNumberPressed('8', 'TUV')}
					>
						{' '}
						8{' '}
					</div>
					<div
						className='pin-login__key'
						onClick={handleNumberPressed('9', 'WXYZ')}
					>
						{' '}
						9{' '}
					</div>
					<br />
					<div className='pin-login__key' onClick={handleDelete}>
						<i className='fa fa-remove' />
					</div>
					<div
						className='pin-login__key'
						onClick={handleNumberPressed('0 ', '')}
					>
						{' '}
						0{' '}
					</div>
					<div className='pin-login__key' onClick={handleSubmit}>
						<i className='fa fa-check' />{' '}
					</div>
				</div>
			</div>
		</div>
	);
}
