import React from 'react';
import {render, cleanup} from 'react-testing-library';
import LoadingSpinner from './LoadingSpinner';

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it('ErrorMessage renders correctly', () => {
	const { queryByTestId } = render(
		<LoadingSpinner isVisible={true} />
	);

	expect(queryByTestId('loading-spinner')).toBeTruthy();
});

it('ErrorMessage does not render if isVisible is false', () => {
	const { queryByTestId } = render(
		<LoadingSpinner isVisible={false} />
	);

	expect(queryByTestId('loading-spinner')).toBeNull();
});