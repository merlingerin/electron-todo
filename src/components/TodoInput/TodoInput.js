import React from 'react';
import {connect} from 'react-redux';

import {addTodo} from '../../actions/index';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Toggle from 'material-ui/Toggle';

const style = {
    button: {
        marginTop: 12, 
        marginBottom: 12, 
        marginLeft: 'auto', 
        minWidth: '150px'
    },
    toggle: {marginBottom: 16, marginTop: 16},
    input: {width: "100%"}
};

class TodoInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: {
                id: this.props.todos.length,
                title: '',
                description: '',
                spendTime: 0,
                active: false,
                completed: false
            },
            errorText: false
        }
        this._handleToggle = this._handleToggle.bind(this);
        this._handleInput = this._handleInput.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
    }

    _handleInput(e) {
        let target = e.target;
        this.setState((prevState) => {
            return {
                todo: {...prevState.todo,[target.name]: target.value},
                errorText: false
            }
        });
    }

    _handleToggle(state) {
        this.setState((prevState) => {
            return {todo:{...prevState.todo, completed: state}}
        });
    }

    _handleSubmit() {
        if(this.state.todo.title !== '' && this.state.todo.description !== '') {
            this.props.onTodoAdd(this.state.todo);
            this.setState((prevState) => {
                return {todo: {...prevState.todo, title: '', description: ''}}
            });
        } else {
            this.setState({errorText: true});
        }

    }

    render() {
        return (
            <div className="todo__input-container">
                <TextField style={style.input}
                    name="title"
                    hintText="Title of Todo"
                    defaultValue={this.state.title}
                    onChange={this._handleInput}
                    errorText={this.state.errorText ? 'This field is required' : ''}
                /><br />
                <br />
                <TextField style={style.input}
                    name="description"
                    hintText="Short description of todo..."
                    defaultValue={this.state.description}
                    onChange={this._handleInput}
                    errorText={this.state.errorText ? 'This field is required' : ''}                    
                    multiLine={true}
                    rows={1}
                    rowsMax={2}
                /><br />
                <Toggle style={style.input}
                    name="title"
                    label="Competed"
                    style={style.toggle}
                    onToggle={(event, state) => {this._handleToggle(state)}}
                />
                <div className="flex-row">
                    <RaisedButton
                        label="Add" 
                        primary={true} 
                        style={style.button} 
                        onClick={this._handleSubmit}
                    />
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
      todos: state.todos
    }
  }

const mapDispatchToProps = dispatch => {
    return {
        onTodoAdd: item => {
            dispatch(addTodo(item))
        }  
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoInput);