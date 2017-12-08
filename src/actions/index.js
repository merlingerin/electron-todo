const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const TAIMER_ACTIVATED = 'TAIMER_ACTIVATED';

export const addTodo = (item) => {
    return {
        type: ADD_TODO,
        payload: item
    }
}

export const removeTodo = (id) => {
    return {
        type: REMOVE_TODO,
        payload: id
    }
}

export const toggleTodo = id => {
    return {
        type: TOGGLE_TODO,
        payload: id
    }
}

export const taimerActivated = () => {
    return {
        type: TAIMER_ACTIVATED,
        payload: ''
    }
}