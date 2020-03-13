import React, { Fragment } from 'react';
import { Store } from '../../store/StoreContext';
const Button = () => {
	const { state, dispatch } = React.useContext(Store);

	const handler = () => {
		dispatch({
			type: 'LOADER',
			payload: true
		});
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				success => {
					dispatch({
						type: 'LOADER',
						payload: false
					});
					showPosition(success);
				},
				err => {
					console.log(err);
				}
			);
			console.log(state.currentPinCoords);
		} else {
			console.log('Geolocation is not supported by this browser.');
		}
		function showPosition(position) {
			let currentCoords = {
				lat: position.coords.latitude,
				lng: position.coords.longitude
			};
			console.log(currentCoords);
			dispatch({
				type: 'CHANGE_LOCATION',
				payload: currentCoords
			});
		}
	};
	return (
		<Fragment>
			{state.isAffected ? (
				<div className='alert alert-info w-50 m-auto' role='alert'>
					Thank you!
				</div>
			) : (
				<button
					className='btn btn-warning m-2'
					onClick={handler}
					disabled={state.isAffected}>
					I am infected
				</button>
			)}
		</Fragment>
	);
};

export default Button;
