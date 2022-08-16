import React from 'react';
import {useNavigate} from 'react-router-dom';
import LogOut from '../../assets/log_out.svg';
import './Navbar.css';

const Navbar = () => {
	const navigate = useNavigate()

	const logOut = () => {
		localStorage.clear()
		navigate('/login')
	}

	return (
		<div className='navbar'>
			<h2>Simple Hotel Check</h2>
			<button className='navbar-logout' onClick={() => logOut()}>
				Выйти <img src={LogOut} alt='Log out' />
			</button>
		</div>
	);
};

export default Navbar;