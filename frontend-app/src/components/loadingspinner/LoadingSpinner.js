import React from "react";
import PropTypes from 'prop-types';
import './style.css';

function LoadingSpinner(props) {
	const { isVisible } = props;

	if (isVisible===true) {
		return (
			<div className="spinner-container" data-testid='loading-spinner'>
				<div className="lds-ring"><div></div><div></div><div></div><div></div></div>
			</div>
		);
	} else {
		return (null);
	}
}

LoadingSpinner.propTypes = {
	isVisible: PropTypes.bool
}

export default LoadingSpinner;