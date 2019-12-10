const LoginReg = function (state = [], action) {


    console.log("reduc", action.responseLogin);

    switch (action.type) {
        case "LOGINSUCCESS":
            return action.responseLogin
            
        case "LOGIN_FAILURE":
            return action.responseLoginFailure

        default:
            return state



    }
}

export default LoginReg