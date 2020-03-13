import React from 'react';
import SimpleMap from '../map/map.component';
import Button from '../button/button.component';

const HomePage = () => {
	const [coords, setCoords] = React.useState({
		lat: 37.98,
		lng: 23.72
	});

	return (
		<div className='App'>
			<SimpleMap zoom={11} center={coords} />
			<Button />
		</div>
	);
};

export default HomePage;
