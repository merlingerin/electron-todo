let initialState = [{
    id: 0,
    title: 'Learn JavaScript',
    description: 'JS, ES6, React, Redux, ReactNative',
    spendTime: 123,
    active: false,
    completed: false
},{
    id: 1,
    title: 'Learn Node js',
    description: 'ExpressJS MeteorJS',
    spendTime: 59000,
    active: false,
    completed: true
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