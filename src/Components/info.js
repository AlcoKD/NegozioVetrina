import React from 'react';
import '../css/info.css';
import mainImg from '../img/Dolci Manie.svg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';

const Info = () => {
	return(

	<div className='info-container'> 
		
	<div className='info-header'>
		<h3 className='info'> Cosa pensano i nostri clienti!</h3>
	</div>

	<div className='info-main-container'>

			<div className='review-container'>
				<h5 className='review'>Francesco Donnarumma</h5>
					<div className='profile-container'>
						<img src={mainImg} className='review' />
					</div>
				<div className='info-star-container'>
					<FontAwesomeIcon icon={faStar} className='star'/>
					<FontAwesomeIcon icon={faStar} className='star'/>
					<FontAwesomeIcon icon={faStar} className='star'/>
					<FontAwesomeIcon icon={faStar} className='star'/>
					<FontAwesomeIcon icon={faStar} className='star' id='grey'/>
				</div>
				<p className='review'>Ottima Qualità!</p>
			</div>

			<div className='review-container'>
				<h5 className='review'>Francesco Donnarumma</h5>
					<div className='profile-container'>
						<img src={mainImg} className='review' />
					</div>
				<div className='info-star-container'>
					<FontAwesomeIcon icon={faStar} className='star'/>
					<FontAwesomeIcon icon={faStar} className='star'/>
					<FontAwesomeIcon icon={faStar} className='star'/>
					<FontAwesomeIcon icon={faStar} className='star'/>
					<FontAwesomeIcon icon={faStar} className='star'/>
				</div>
				<p className='review'>Ottima Qualità!</p>
			</div>

			<div className='review-container'>
				<h5 className='review'>Francesco Donnarumma</h5>
					<div className='profile-container'>
						<img src={mainImg} className='review' />
					</div>
				<div className='info-star-container'>
					<FontAwesomeIcon icon={faStar} className='star'/>
					<FontAwesomeIcon icon={faStar} className='star'/>
					<FontAwesomeIcon icon={faStar} className='star'/>
					<FontAwesomeIcon icon={faStar} className='star'/>
					<FontAwesomeIcon icon={faStar} className='star' id='grey'/>
				</div>
				<p className='review'>Ottima Qualità!</p>
			</div>
	</div>

	</div>
		);
}


export default Info;