import React from 'react';

class SearchForm extends React.Component {

	state = {
		keyword: 'travel insurance',
		domain: 'comparetravelinsurance.com.au'
	}

	handleValueChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	}

	handleFormSubmit = (event) => {
		event.preventDefault();

		this.props.resolvePosition(this.state.keyword, this.state.domain);
	}
	
	render() {
		return(
			<div>
				<form onSubmit={this.handleFormSubmit}>
					<input type="text" value={this.state.keyword} 
						onChange={this.handleValueChange} 
						name="keyword"/>

					<input type="text" value={this.state.domain} 
						onChange={this.handleValueChange} 
						name="domain"/>

					<input type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}

export default SearchForm;