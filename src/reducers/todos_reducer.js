let initialState = [{
    id: 0,
    title: 'Learn JavaScript',
    description: 'JS, ES6, React, Redux, ReactNative',
    spendTime: 0,
    active: false,
    completed: false
}];

const todos = (state = initialState || [], action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                action.payload
            ]
        case 'REMOVE_TODO':
            let todo = state.filter((item) => {
                item.id !== action.payload.id;
            })
            return todo;
        case 'TOGGLE_TODO':
            return state.map(todo =>
                (todo.id === action.payload) 
                ? {...todo, completed: !todo.completed}
                : todo
            )
        default:
            return state;    
    }
}

export default todos;