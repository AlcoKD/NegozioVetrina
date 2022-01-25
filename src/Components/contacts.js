import React from 'react';
import '../css/contacts.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faThumbsUp} from '@fortawesome/free-solid-svg-icons';
import {faFacebook,faInstagram,faTiktok} from '@fortawesome/free-brands-svg-icons';


const Contacts = () => {
	return(
		<footer className='contacts-container'>

			<div className='contacts-text'>
			<h1 className='contacts'>Seguici sui Social  <FontAwesomeIcon icon={faThumbsUp} id='thumbs' /></h1>
			</div>

			<div className='contacts'>

				<div className='contacts-social-container'>
					<FontAwesomeIcon icon={faFacebook} className='contacts-social' />
				</div>

				<div className='contacts-social-container'>
					<FontAwesomeIcon icon={faInstagram} className='contacts-social' />
				</div>

				<div className='contacts-social-container'>
					<FontAwesomeIcon icon={faTiktok} className='contacts-social'  />
				</div>
							
			</div>
		</footer>
		);
}

export default Contacts;