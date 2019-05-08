import React from "react";
import PropTypes from 'prop-types';
import './style.css';

/**
	Component to render positions
	Currently renders a simple list with position but can be extended to display other information
*/
function DomainPosition(props) {
	const { positions } = props;

	if (positions && positions.length>0) {
		return (
			<div className="position-result-container">
				<h4>Domain was found at following locations.</h4>

				<ul className="position-container" data-testid='positions-container'>
					{
						positions.map(position => (
							<li className="position-block" key={`position-${position}`}>
								<h3>{position}</h3>
							</li>
						))
					}
				</ul>
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