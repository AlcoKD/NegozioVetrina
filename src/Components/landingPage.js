import React from 'react';
import '../css/landingPage.css';
import mainImg from '../img/Dolci Manie.svg';
import bearImg from '../img/bear winnie.svg';

const LandingPage = () => {
	return(


		<div className='LP-container'>
			<div className='LP-grid'>
				<div className='logo-container'>
					<img src={mainImg} alt='logo' id='logo' />
				</div>
				

			<div className='LP-header-container'>
				<header className='LP-header'>Articoli di pasticceria</header>
			</div>
		</div>

		<div className='LP-info-container'>
			<h1 className='info-text padding'>Negozio &#10; Dolci Manie</h1>
			<h4 className='info-text'>di</h4>
			<h1 className='info-text'>Bennardino Giovanni</h1>
			<h2 className='info-text'>Via San Donato 70</h2>
			<h3 className='info-text'>tel. 081 588 7645</h3>
			<hr />
		</div>

		<div className='LP-background'>
			

			<div className='text-container'>
				<h3 className='LP-H3'>Alcuni dei nostri prodotti</h3>
				<div className='catalogo-container'>

				<div className='catalogo-img-container'>
					<img src={mainImg} alt='catalogo' id='catalogo-first' />
				</div>

				<div className='catalogo-img-container'>
					<img src={mainImg} alt='catalogo' id='catalogo-second' />
				</div>

				<div className='catalogo-img-container'>
					<img src={mainImg} alt='catalogo' id='catalogo-third' />
				</div>

				<div className='catalogo-img-container'>
					<img src={mainImg} alt='catalogo' id='catalogo-fourth' />
				</div>

				</div>
			</div>
		</div>

		</div>

		);
}


export default LandingPage;