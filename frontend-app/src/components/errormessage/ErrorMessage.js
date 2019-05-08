import React from "react";
import PropTypes from 'prop-types';
import './style.css';

/*
	Component to render error message
*/
function ErrorMessage(props) {
	const { isVisible, errorMessage } = props;

	if (isVisible===true && errorMessage) {
		return (
			<div data-testid='error-message-container' className="error-container">
				<p>{errorMessage}</p>
			</div>
		);
	} else {
		return (null);
	}
}

ErrorMessage.propTypes = {
	isVisible: PropTypes.bool,
	errorMessage: PropTypes.string
};

export default ErrorMessage;