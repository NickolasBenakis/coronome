import React, { Fragment } from 'react';
import './city.scss';
const City = ({ city }) => {
	return (
		<Fragment>
			<li className='list-group-item'>{city.city}</li>
		</Fragment>
	);
};

export default City;
