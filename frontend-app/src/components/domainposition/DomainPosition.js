import React from "react";
import PropTypes from 'prop-types';
import './style.css';

function DomainPosition(props) {
	const { positions } = props;

	if (positions && positions.length>0) {
		return (
			<div className="position-result-container">
				<h4>Domain was found at following locations.</h4>

				<div className="position-container" data-testid='positions-container'>
					{
						positions.map(position => (
							<div className="position-block" key={`position-${position}`}>
								<h3>{position}</h3>
							</div>
						))
					}
					<div className="clear"></div>
				</div>
			</div>
		);
	} else if (positions!=null && positions.length<1) {
		return (
			<div className="position-result-container">
				<h4>Domain was not found in first 10 pages.</h4>
			</div>
		);
	} else {
		return (null);
	}
}

DomainPosition.propTypes = {
	positions: PropTypes.array,
	keyword: PropTypes.string,
	domain: PropTypes.string
}

export default DomainPosition;