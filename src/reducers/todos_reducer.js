let initialState = [{
    id: 0,
    title: 'Learn JavaScript',
    description: 'JS, ES6, React, Redux, ReactNative',
    spendTime: 60,
    active: false,
    completed: false
},{
    id: 1,
    title: 'Learn Node js',
    description: 'ExpressJS MeteorJS',
    spendTime: 1,
    active: false,
    completed: true
},{
    id: 2,
    title: 'New Todo',
    description: 'some new todo',
    spendTime: 160,
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
                return item.id !== action.payload.id;
            })
            return todo;
        case 'UPDATE_TODO':
            return state.map((item) => {
                item.id === action.payload ? item.active = !item.active : false;
                return item;
            });
        case 'TOGGLE_TODO':
            return state.map(todo =>
                (todo.id === action.payload) 
                ? {...todo, completed: !todo.completed}
                : todo
            )
        // case 'FILTER':
        //     if(action.payload === 'FILTER_COMPLETED') {
        //         return state.filter(todo => {
        //             console.log('todo.completed', todo.completed);
        //             return todo.completed
        //         });
        //     } else if(action.payload === 'FILTER_ACTIVE') {
        //         return state.filter(todo => (
        //             todo.active
        //         ));
        //     } else {
        //         return state;
        //     }

        default:
            return state;    
    }
}

export default todos;