import React, { Fragment } from 'react';
import { Store } from '../../store/StoreContext';
const FilterCity = () => {
	const { state, dispatch } = React.useContext(Store);

	const filterCityHandler = e => {
		dispatch({
			type: 'FILTER_CITY',
			payload: e.currentTarget.value
		});
	};
	return (
		<Fragment>
			<input type='search' onChange={filterCityHandler} />
		</Fragment>
	);
};

export default FilterCity;
