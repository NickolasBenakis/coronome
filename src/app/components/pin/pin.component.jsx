import React, { Fragment } from "react";
import "./pin.styles.scss";
const Pin = ({ text }) => {
	return (
		<Fragment>
			<div className='pinner'>{text}</div>
		</Fragment>
	);
};

export default Pin;
