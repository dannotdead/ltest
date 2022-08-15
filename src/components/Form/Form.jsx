import React from 'react';
import './Form.css';

const Form = ({ template, className }) => {
	return (
		<form className={`form ${className}`}>
			{template}
		</form>
	);
};

export default Form;