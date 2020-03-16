import React, { Fragment } from 'react';
import { Store } from '../../store/StoreContext';
import firebase from '../../../firebase';
import Geocode from '../../../geocode';
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
					getCurrentPositionCb(success);
				},
				err => {
					console.log(err);
				}
			);
			console.log(state.currentPinCoords);
		} else {
			console.log('Geolocation is not supported by this browser.');
		}
		async function getCurrentPositionCb(position) {
			const currentCoords = {
				lat: position.coords.latitude,
				lng: position.coords.longitude
			};
			console.log(currentCoords);
			await getCityNameFromLatLng(currentCoords);
		}
	};

	async function getCityNameFromLatLng(coords) {
		try {
			const address = await Geocode.fromLatLng(
				coords.lat.toString(),
				coords.lng.toString()
			);
			const cityName =
				address.results[0] &&
				address.results[0].address_components[2].short_name;
			dispatch({
				type: 'CHANGE_LOCATION',
				payload: { localCoords: coords, city: cityName || '' }
			});
			addInfection(cityName);
		} catch (error) {
			throw new Error(error);
		}
	}

	// const getCities = () => {
	// 	const db = firebase.firestore();
	// 	db.collection('infections')
	// 		.get()
	// 		.then(querySnapshot => {
	// 			querySnapshot.forEach(doc => {
	// 				console.log(doc.id, doc.data());
	// 			});
	// 		})
	// 		.catch(function(error) {
	// 			console.error('Error adding document: ', error);
	// 		});
	// };

	const addInfection = cityName => {
		const db = firebase.firestore();
		const increment = firebase.firestore.FieldValue.increment(1);

		function incrementInfection(cityName) {
			db.collection('infections')
				.doc(cityName)
				.set({
					number: increment
				});
		}
		db.collection('infections')
			.doc(cityName)
			.update({ number: increment })
			.then(success => console.log('number updated'))
			.catch(err => {
				console.log('not found, try to set');
				incrementInfection(cityName);
			});
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
					disabled={state.showLoader}>
					I am infected
				</button>
			)}
		</Fragment>
	);
};

export default Button;
