import React from 'react';
import { render, cleanup, fireEvent, waitForElement } from 'react-testing-library';
import SearchForm from './SearchForm';

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it('SearchForm has all components rendered properly', () => {
	const resolvePosition = jest.fn();
	const { queryByTestId } = render(
		<SearchForm resolvePosition={resolvePosition} />
	);

	expect(queryByTestId('keyword')).toBeTruthy();
	expect(queryByTestId('domain')).toBeTruthy();
	expect(queryByTestId('submit')).toBeTruthy();
});

it('SearchForm calls resolvePosition if valid params are passed', () => {
	const resolvePosition = jest.fn();
	const { getByTestId } = render(
		<SearchForm resolvePosition={resolvePosition} />
	);

	
	fireEvent.change(getByTestId('domain'), {target: {value: 'somedomain.com.au'}});
	expect(getByTestId('domain').value).toBe('somedomain.com.au');
	fireEvent.change(getByTestId('keyword'), {target: {value: 'somekeyword'}});
	expect(getByTestId('keyword').value).toBe('somekeyword');

	getByTestId('submit').click();

	expect(resolvePosition).toHaveBeenCalledTimes(1);
});

it('SearchForm does not trigger resolvePosition with invalid params', () => {
	const resolvePosition = jest.fn();
	const { getByTestId } = render(
		<SearchForm resolvePosition={resolvePosition} />
	);

	getByTestId('submit').click();

	expect(resolvePosition).toHaveBeenCalledTimes(0);
});