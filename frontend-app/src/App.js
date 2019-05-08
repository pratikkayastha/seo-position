import React, { PureComponent } from 'react';
import './App.css';
import SearchForm from './components/searchform/SearchForm';
import LoadingSpinner from './components/loadingspinner/LoadingSpinner';
import ErrorMessage from './components/errormessage/ErrorMessage';
import DomainPosition from './components/domainposition/DomainPosition';
import { resolvePosition } from './helpers/locationResolver';

/**
  Main App component
*/
class App extends PureComponent {

  state = {
    isLoading: false,
    hasError: false,
    positions: null
  }

  resolvePosition = async (keyword, domain) => {
    this.setState({
      isLoading: true,
      hasError: false,
      positions: null
    });

    const positions = await resolvePosition(keyword, domain);
    
    if (positions) {
      this.setState({
        isLoading: false,
        hasError: false,
        positions: positions
      });
    } else {
      this.setState({
        isLoading: false,
        hasError: true
      });
    }
  }

  render() {
    return (
      <div className="app-container">
        <h1 className="main-header">Google Search Result Positions</h1>
        <p>Please enter keyword and domain to resolve position in Google search results.</p>

        <SearchForm resolvePosition={this.resolvePosition} />
        <LoadingSpinner isVisible={this.state.isLoading} />
        <ErrorMessage isVisible={this.state.hasError} 
          errorMessage='There was an error while fetching the domain positions!' />
        <DomainPosition positions={this.state.positions} />
      </div>
    );
  }

}

export default App;
