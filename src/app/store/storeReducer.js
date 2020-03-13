import { CITIES } from '../../api/cities';

export const initialState = {
	currentPinCoords: {
		lat: null,
		lng: null
	},
	cities: CITIES,
	filteredCities: CITIES
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
				return state;
			}
		default:
			return state;
	}
}
