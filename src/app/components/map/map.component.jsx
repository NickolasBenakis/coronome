import React from 'react';
import GoogleMapReact from 'google-map-react';
import { API_KEY } from '../../../API_KEY';
import './map.styles.scss';
import Pin from '../pin/pin.component';
import { Store } from '../../store/StoreContext';
function SimpleMap({ center, zoom }) {
	const { state, dispatch } = React.useContext(Store);

	return (
		<div className='map-container'>
			<GoogleMapReact
				bootstrapURLKeys={{ key: API_KEY }}
				defaultCenter={center}
				defaultZoom={zoom}
				yesIWantToUseGoogleMapApiInternals>
				<Pin
					lat={state.currentPinCoords.lat || null}
					lng={state.currentPinCoords.lng || null}
					text='Me'
				/>
			</GoogleMapReact>
		</div>
	);
}

export default React.memo(SimpleMap);
