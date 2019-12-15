const user = (state = {}, action) => {
    switch(action.type) {
        case 'POST_REGISTER_USER_SUCCESS':
        case 'POST_LOGIN_USER_SUCCESS':
            console.log("MASUK JUGA KE REDUCER");
            return action.dataUser;
        case 'POST_REGISTER_USER_FAILURE':
        case 'POST_LOGIN_USER_FAILURE':
        default:
            return state;
    }
}

export default user;
