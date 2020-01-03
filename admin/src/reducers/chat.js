const chat = (state = [], action) => {
    switch(action.type) {
        case 'LOAD_MESSAGE_SUCCESS':
            return action.loadChatSuccess.data
        default:
            return state;
    }
}
export default chat