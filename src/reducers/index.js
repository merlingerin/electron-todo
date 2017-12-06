import { combineReducers } from 'redux';
import todos from './todos_reducer';
import appState from './app_reducer';

export default combineReducers({
    todos,
    appState
});
