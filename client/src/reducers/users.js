const users = function (state = [], action) {

    console.log("reduc users", action.resProfileSuccess);


    switch (action.type) {
       
        case "LOADPROFILE_SUCCESS":
            return action.resProfileSuccess


        default:
            return state



    }
}

export default users