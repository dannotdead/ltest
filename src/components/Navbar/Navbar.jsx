import React from 'react';
import LogOut from '../../assets/log_out.svg';
import './Navbar.css';

const Navbar = () => {
	return (
		<div className='navbar'>
			<h2>Simple Hotel Check</h2>
			<button className='navbar-logout'>
				Выйти <img src={LogOut} alt='Log out' />
			</button>
		</div>
	);
};

export default Navbar;