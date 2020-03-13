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
			<div className='input-group mt-2 mb-2'>
				<input
					type='text'
					className='form-control'
					onChange={filterCityHandler}
				/>
			</div>
		</Fragment>
	);
};

export default FilterCity;
