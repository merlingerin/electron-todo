import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';

import Layer from 'layers/layer';
import AppHeader from 'components/AppHeader/AppHeader';
import AppBottomNavigation from 'components/AppBottomNavigation/AppBottomNavigation';
import TodoList from './components/TodoList/TodoList';
import {taimerActivated} from './actions/index';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Layer>
          <AppHeader />
          <TodoList {...this.props} />
          <AppBottomNavigation />
        </Layer>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos,
    appState: state.appState
  }
}

const mapDispatchToProps = dispatch => {
  return {
      onTimerActivated: () => {
          dispatch(taimerActivated())
      }  
  }
}

export default connect(mapStateToProps)(App);
