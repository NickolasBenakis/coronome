import React from "react";
import GoogleMapReact from "google-map-react";
import { API_KEY } from "../../../API_KEY";
import "./map.styles.scss";
import Pin from "../pin/pin.component";

function SimpleMap({ center, zoom }) {
	return (
		<div className='map-container'>
			<GoogleMapReact
				bootstrapURLKeys={{ key: API_KEY }}
				defaultCenter={center}
				defaultZoom={zoom}
				yesIWantToUseGoogleMapApiInternals>
				<Pin lat={center.lat} lng={center.lng} text='My position' />
			</GoogleMapReact>
		</div>
	);
}

export default SimpleMap;
