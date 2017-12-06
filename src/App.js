import React, { Component } from 'react';
import './App.css';

import Layer from 'layers/layer';
import AppHeader from 'components/AppHeader/AppHeader';
import AppBottomNavigation from 'components/AppBottomNavigation/AppBottomNavigation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layer>
          <AppHeader />
          <AppBottomNavigation />
        </Layer>
      </div>
    );
  }
}

export default App;
