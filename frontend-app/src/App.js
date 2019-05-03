import React, { PureComponent } from 'react';
import './App.css';
import SearchForm from './components/SearchForm';
import { resolvePosition } from './helpers/locationResolver';

class App extends PureComponent {

  state = {
    isLoading: false,
    hasError: false,
    positions: []
  }

  resolvePosition = async (keyword, domain) => {
    this.setState({
      isLoading: true,
      hasError: false
    });

    const positions = await resolvePosition(keyword, domain);
    console.log(positions);

    if (positions) {
      console.log("Response found! no error!");
      this.setState({
        isLoading: false,
        hasError: false,
        positions: positions
      });
    } else {
      console.log("ERROR!");
      this.setState({
        isLoading: false,
        hasError: false
      });
    }
  }

  render() {
    return (
      <div className="app-container">
        <h1 className="main-header">Google Search Result Positions</h1>
        <p>Please enter keyword and domain to resolve position in Google search results.</p>

        <SearchForm resolvePosition={this.resolvePosition} />
      </div>
    );
  }

}

export default App;
