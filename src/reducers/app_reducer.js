let initialState = {
    timerActived: false,
    valueOfTasks: 1
};

export default (state = initialState || {}, action) => {
    switch(action.type) {
        case 'TAIMER_ACTIVATED':
            return {
                ...state,
                timerActived: !state.timerActived
            }
        default:
            return state;        
    }
}
