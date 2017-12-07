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
            id: this.props.todos.length,
            title: '',
            description: '',
            spendTime: 0,
            active: false,
            completed: false
        }
        this._handleToggle = this._handleToggle.bind(this);
        this._handleInput = this._handleInput.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
    }

    _handleInput(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    _handleToggle(state) {
        this.setState({completed: state});
    }

    _handleSubmit() {
        this.props.onTodoAdd(this.state);
        this.setState({title: '', description: ''});
    }

    render() {
        return (
            <div className="todo__input-container">
                <TextField style={style.input}
                    name="title"
                    hintText="Title of Todo"
                    defaultValue={this.state.title}
                    onChange={this._handleInput}
                /><br />
                <br />
                <TextField style={style.input}
                    name="description"
                    hintText="Short description of todo..."
                    defaultValue={this.state.description}
                    onChange={this._handleInput}
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