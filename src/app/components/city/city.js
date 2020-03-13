import React, { Fragment } from 'react';
import './city.scss';
import { Store } from '../../store/StoreContext';
const City = ({ city }) => {
	const { state, dispatch } = React.useContext(Store);

	const navigateToCity = () => {
		const cityCoords = {
			lat: parseFloat(city.lat),
			lng: parseFloat(city.lng)
		};
		console.log(cityCoords);
		dispatch({
			type: 'NAVIGATE_TO_CITY',
			payload: cityCoords
		});
	};
	return (
		<Fragment>
			<li className='list-group-item' onClick={navigateToCity}>
				{city.city}
			</li>
		</Fragment>
	);
};

export default City;
