import React from 'react';
import {connect} from 'react-redux';
import {toggleTodo} from '../../actions/index';

import {List} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import TodoInput from '../TodoInput/TodoInput';
import TodoItem from '../TodoItem/TodoItem';

const TodoList = (props) => {
    return (
        <div className="todo__container">
            <TodoInput />
            <List className="todo__list">
                { props.todos.length > 0 ? 
                    props.todos.map((item) => (
                        <TodoItem 
                            key={item.id} 
                            {...item}
                            timerActived={props.appState.timerActived}
                            onToggleTodo={props.onToggleTodo}
                        />
                    ))  :
                    'No Todos.'
                }
            </List>
        </div>
    );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = dispatch => {
    return {
        onToggleTodo: (id) => {
            dispatch(toggleTodo(id));
        }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);