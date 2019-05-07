import React from 'react';
import {render, cleanup} from 'react-testing-library';
import DomainPosition from './DomainPosition';

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it('DomainPosition renders correctly', () => {
	const positions = [2,9,26];
	const { queryByTestId, queryByText } = render(
		<DomainPosition positions={positions} />
	);

	expect(queryByTestId('positions-container')).toBeTruthy();

	positions.forEach((position) => {
		expect(queryByText(`${position}`)).toBeTruthy();
	});
});

it('DomainPosition renders correctly for empty position array', () => {
	const positions = [];
	const { queryByTestId, queryByText } = render(
		<DomainPosition positions={positions} />
	);

	expect(queryByTestId('positions-container')).toBeNull();
});