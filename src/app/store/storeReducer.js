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
	}
};

export function reducer(state, action) {
	switch (action.type) {
		case 'CHANGE_LOCATION':
			if (action.payload && Object.values(action.payload).length) {
				return { ...state, currentPinCoords: action.payload };
			}
			return state;
		case 'FILTER_CITY':
			if (action.payload) {
				const filteredCities = state.cities.filter((city, index, self) =>
					city.city.toLowerCase().includes(action.payload.toLowerCase())
				);
				return { ...state, filteredCities: filteredCities };
			} else {
				return { ...state, filteredCities: state.cities };
			}
		case 'RESET_CITY':
			return { ...state, filteredCities: state.cities };
		case 'NAVIGATE_TO_CITY':
			return { ...state, currentCity: action.payload };
		default:
			return state;
	}
}
