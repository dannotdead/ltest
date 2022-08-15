import React from 'react';
import './Card.css';

const Card = ({ template, className }) => {
	return (
		<div className={`card ${className}`}>
			{template}
		</div>
	);
};

export default Card;