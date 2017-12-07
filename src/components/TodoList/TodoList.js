import React from 'react';
import {List} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import TodoInput from '../TodoInput/TodoInput';
import TodoItem from '../TodoItem/TodoItem';

const TodoList = (props) => {
    console.log('PROPS', props);
    return (
        <div className="todo__container">
            <TodoInput />
            <List className="todo__list">
                { props.todos.length > 0 ? 
                    props.todos.map((item) => (
                        <TodoItem 
                            key={item.id} {...item} 
                        />
                    ))  :
                    'No Todos.'
                }
            </List>
        </div>
    );
}

export default TodoList;