import React, {Component} from 'react';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import History from 'material-ui/svg-icons/action/history';
import PlaylistAdd from 'material-ui/svg-icons/av/playlist-add';
import PlaylistCheck from 'material-ui/svg-icons/av/playlist-add-check';

const playlistAdd = <PlaylistAdd />
const playlistCheck = <PlaylistCheck />;
const history = <History />;

class AppBottomNavigation extends Component {
  state = {
    selectedIndex: 0,
  };

  select = (index) => this.setState({selectedIndex: index});

  render() {

    const stylesheet = {
      "position": "absolute",
      "width": "100%",
      "bottom": 0,
    }
    
    return (
      <Paper style={stylesheet} zDepth={1}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
          <BottomNavigationItem
            label="Recents"
            icon={playlistAdd}
            onClick={() => this.select(0)}
          />
          <BottomNavigationItem
            label="Favorites"
            icon={playlistCheck}
            onClick={() => this.select(1)}
          />
          <BottomNavigationItem
            label="Nearby"
            icon={history}
            onClick={() => this.select(2)}
          />
        </BottomNavigation>
      </Paper>
    );
  }
}

export default AppBottomNavigation;