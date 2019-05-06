import React from 'react';
import './style.css';


class SearchForm extends React.Component {

	state = {
		keyword: '',
		domain: '',

		errorFields: [],
		isDirty: false
	}

	handleValueChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			[name]: value,
			isDirty: true
		});

		this.validateForm();
	}

	validateForm = () => {
		let invalidFields = [];
		if (!this.state.keyword) {
			invalidFields.push('keyword');
		}

		if (!this.state.domain) {
			invalidFields.push('domain');
		}

		this.setState({
			errorFields: invalidFields
		});
	}

	handleFormSubmit = (event) => {
		event.preventDefault();

		this.props.resolvePosition(this.state.keyword, this.state.domain);
	}

	checkIfFieldsHasError = (fieldName) => {
		return this.state.errorFields.indexOf(fieldName)>-1;
	}
	
	render() {
		return(
			<div className="form-container">
				<form onSubmit={this.handleFormSubmit}>
					<div className={`form-block ${this.checkIfFieldsHasError('keyword')?'error':''}`}>
						<label for="keyword">Keyword</label>
						<input type="text" value={this.state.keyword} 
							onChange={this.handleValueChange} 
							onBlur={this.validateForm}
							name="keyword"/>
					</div>

					<div className={`form-block ${this.checkIfFieldsHasError('domain')?'error':''}`}>
						<label for="domain">Domain</label>
						<input type="text" value={this.state.domain} 
							onChange={this.handleValueChange} 
							onBlur={this.validateForm}
							name="domain"/>
					</div>

					<div className="form-block">
						<label>&nbsp;</label>
						<input type="submit" value="Get Positions" 
						className={`${this.state.errorFields.length>0 || this.state.isDirty===false ? 'disabled' : ''}`}/>
					</div>

					<div className="clear"></div>
				</form>
			</div>
		);
	}
}

export default SearchForm;