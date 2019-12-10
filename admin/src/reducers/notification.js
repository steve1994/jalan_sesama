const notification = (state = [], action) => {
    switch(action.type) {
        case 'LOAD_NOTIFICATION_SUCCESS':
            return action.dataNotification.data;
        case 'LOAD_NOTIFICATION_FAILURE':
        default:
            return state;
    }
}

export default notification;
