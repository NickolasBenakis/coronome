import React, { Fragment } from 'react';
import { Store } from '../../store/StoreContext';
const Button = () => {
	const { state, dispatch } = React.useContext(Store);

	const handler = () => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(showPosition);
			console.log(state.currentPinCoords);
		} else {
			console.log('Geolocation is not supported by this browser.');
		}
		function showPosition(position) {
			let currentCoords = {
				lat: position.coords.latitude,
				lng: position.coords.longitude
			};
			dispatch({
				type: 'CHANGE_LOCATION',
				payload: currentCoords
			});
		}
	};
	return (
		<Fragment>
			<button className='btn btn-warning m-2' onClick={handler}>
				I am infected
			</button>
		</Fragment>
	);
};

export default Button;
