import { CITIES } from '../../api/cities';

export const initialState = {
	currentPinCoords: {
		lat: null,
		lng: null
	},
	cities: CITIES,
	filteredCities: CITIES,
	currentCity: {
		lat: 37.98,
		lng: 23.72
	},
	currentCityName: '',
	currentInfectedCity: null,
	currentZoom: 11,
	isAffected: false,
	showLoader: false
};

export function reducer(state, action) {
	switch (action.type) {
		case 'CHANGE_LOCATION':
			if (
				action.payload.localCoords &&
				Object.values(action.payload.localCoords).length
			) {
				const cityMatch = state.cities.find(city => {
					return city.city.includes(action.payload.cityName);
				});
				return {
					...state,
					currentPinCoords: action.payload.localCoords,
					currentZoom: 13,
					currentCity: action.payload.localCoords,
					currentCityName: cityMatch.city,
					isAffected: true
				};
			}
			return state;
		case 'FILTER_CITY':
			if (action.payload) {
				const filteredCities = state.cities.filter((city, index, self) =>
					city.city.toLowerCase().includes(action.payload.toLowerCase())
				);
				return { ...state, filteredCities: filteredCities, currentZoom: 11 };
			} else {
				return { ...state, filteredCities: state.cities, currentZoom: 11 };
			}
		case 'RESET_CITY':
			return { ...state, filteredCities: state.cities };
		case 'NAVIGATE_TO_CITY':
			return {
				...state,
				currentCity: action.payload.cityCoords,
				currentCityName: action.payload.name
			};
		case 'LOADER':
			return { ...state, showLoader: action.payload };
		default:
			return state;
	}
}
