import React, { Fragment } from 'react';
import './city.scss';
import { Store } from '../../store/StoreContext';
import classNames from 'classnames';

const City = ({ city }) => {
	const { state, dispatch } = React.useContext(Store);

	const navigateToCity = () => {
		const cityCoords = {
			lat: parseFloat(city.lat),
			lng: parseFloat(city.lng)
		};
		const payload = {
			cityCoords: cityCoords,
			name: city.city
		};
		console.log(cityCoords);
		dispatch({
			type: 'NAVIGATE_TO_CITY',
			payload: payload
		});
	};
	const className = classNames('list-group-item', {
		active: city.city === state.currentCityName
	});
	return (
		<Fragment>
			<li className={className} onClick={navigateToCity}>
				{city.city}
			</li>
		</Fragment>
	);
};

export default City;
