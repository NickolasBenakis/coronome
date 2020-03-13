import React, { Fragment } from 'react';
import { Store } from '../../store/StoreContext';
import City from '../city/city';
import './cityList.scss';
const CityList = () => {
	const { state, dispatch } = React.useContext(Store);
	return (
		<ul className='list-group city-list'>
			{state.filteredCities.map((city, index) => {
				return <City key={index} city={city} />;
			})}
		</ul>
	);
};

export default CityList;
