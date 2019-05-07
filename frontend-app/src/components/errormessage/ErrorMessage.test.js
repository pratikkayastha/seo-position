import React from 'react';
import {render, cleanup} from 'react-testing-library';
import ErrorMessage from './ErrorMessage';

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it('ErrorMessage renders render error message', () => {
  const { getByText } = render(
    <ErrorMessage isVisible={true} errorMessage='Error while getting positions' />
  );

  expect(getByText('Error while getting positions')).toBeTruthy();
});

it('ErrorMessage does not renders if isVisible is false', () => {
	const { queryByText } = render(
		<ErrorMessage isVisible={false} errorMessage='Error while getting positions' />
	);

	expect(queryByText('Error while getting positions')).toBeNull();
});

it('ErrorMessage does not renders if errorMessage is empty', () => {
	const { queryByTestId } = render(
		<ErrorMessage isVisible={true} errorMessage='' />
	);

	expect(queryByTestId('error-message-container')).toBeNull();
});