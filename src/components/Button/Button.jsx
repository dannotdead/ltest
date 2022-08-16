import React from 'react';
import './Button.css';

const Button = ({name, ...props}) => {
	return (
		<button
			className='button'
			{...props}
		>
			{name}
		</button>
	);
};

export default Button;