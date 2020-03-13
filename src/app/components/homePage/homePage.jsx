import React from 'react';
import SimpleMap from '../map/map.component';
import Button from '../button/button.component';
import CityList from '../cityList/cityList';
import './homePage.styles.scss';
import FilterCity from '../filterCity/filterCity';
import { Store } from '../../store/StoreContext';
const HomePage = () => {
	const [coords, setCoords] = React.useState({
		lat: 37.98,
		lng: 23.72
	});

	return (
		<div className='App'>
			<main className='main-container'>
				<section className='map-section'>
					<SimpleMap zoom={11} center={coords} />
					<Button />
				</section>
				<section className='cities-section'>
					<FilterCity />
					<CityList />
				</section>
			</main>
		</div>
	);
};

export default HomePage;
