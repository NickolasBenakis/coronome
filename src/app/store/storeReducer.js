export const initialState = {
	currentPinCoords: {
		lat: null,
		lng: null
	}
};

export function reducer(state, action) {
	switch (action.type) {
		case 'CHANGE_LOCATION':
			if (action.payload && Object.values(action.payload).length) {
				return { ...state, currentPinCoords: action.payload };
			}
			return state;
		default:
			return state;
	}
}
