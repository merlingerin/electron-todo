import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';

import Layer from 'layers/layer';
import AppHeader from 'components/AppHeader/AppHeader';
import AppBottomNavigation from 'components/AppBottomNavigation/AppBottomNavigation';
import TodoList from './components/TodoList/TodoList';

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <Layer>
          <AppHeader />
          <TodoList todos={this.props.todos} />
          <AppBottomNavigation />
        </Layer>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(App);
