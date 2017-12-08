import React, {Component} from 'react';
import {connect} from 'react-redux';
import {filter} from '../../actions/index';

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
      "position": "fixed",
      "width": "100%",
      "bottom": 0,
    }
    
    return (
      <Paper style={stylesheet} zDepth={1}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
          <BottomNavigationItem
            label="Recents"
            icon={playlistAdd}
            onClick={() => {
                this.select(0);
                this.props.filter('FILTER_ALL');
              }
            }
          />
          <BottomNavigationItem
            label="Favorites"
            icon={playlistCheck}
            onClick={() => {
                this.select(1);
                this.props.filter('FILTER_COMPLETED');
              }
            }
          />
          <BottomNavigationItem
            label="Nearby"
            icon={history}
              onClick={() => {
                this.select(2);
                this.props.filter('FILTER_ACTIVE');
              }
            }
          />
        </BottomNavigation>
      </Paper>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = dispatch => {
    return {
        filter: (type) => {
            dispatch(filter(type));
        }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(AppBottomNavigation);