const LoginReg = function (state = [], action) {


    console.log("reduc", action.resDeletLogin);

    switch (action.type) {
        case "LOGINSUCCESS":
            return action.responseLogin

        case "LOGIN_FAILURE":
            return action.responseLoginFailure

        case "PROCESS_LOGOUT":
            console.log("PROCESS LOGOUT");
            if (action.resDeletLogin == undefined) {
                action.resDeletLogin = [];
            }
            return action.resDeletLogin;
       
        default:
            return state
            


    }
}

export default LoginReg