import React from 'react';
import '../css/navbar.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome,faCog} from '@fortawesome/free-solid-svg-icons';
import {faFacebook,faInstagram,faTiktok} from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {

	window.onload = () => {
	const setting = document.querySelector('.down');
	setting.addEventListener('click',settingToggle);

	function settingToggle() {
		const socials = document.querySelectorAll('.change');
			for(var i = 0; i < socials.length; i++){
	   	 	socials[i].classList.toggle('nodisplay');
		}
	}
}

	return(

		<div className='navbar-container'>
		<FontAwesomeIcon icon={faCog}  className='fonticon down' />
		<FontAwesomeIcon icon={faFacebook}  className='fonticon change nodisplay' id='facebook' />
		<FontAwesomeIcon icon={faInstagram}  className='fonticon change nodisplay' id='instagram' />
		<FontAwesomeIcon icon={faTiktok}  className='fonticon change nodisplay' id='tiktok'/>
		<FontAwesomeIcon icon={faHome}  className='fonticon change nodisplay' id='home' />
		</div>

		);
}

export default Navbar;