import React from 'react';
import './Spinner.css';

const Spinner = () => {
	return (
		/* Centrar Spinner */
		<div className='lds-roller'>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
};

export default Spinner;
