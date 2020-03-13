import React from "react";
import SimpleMap from "../map/map.component";

const HomePage = () => {
	const [coords, setCoords] = React.useState({
		lat: 37.98,
		lng: 23.72
	});
	const handler = () => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(showPosition);
			console.log(coords);
		} else {
			console.log("Geolocation is not supported by this browser.");
		}
		function showPosition(position) {
			let currentCoords = {
				lat: position.coords.latitude,
				lng: position.coords.longitude
			};
			setCoords(currentCoords);
		}
	};
	return (
		<div className='App'>
			<SimpleMap zoom={11} center={coords} />
			<button className='btn btn-warning' onClick={handler}>
				I am infected
			</button>
		</div>
	);
};

export default HomePage;
