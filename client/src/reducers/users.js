const users = function (state = [], action) {

    console.log("reduc users", action.resProfileSuccess);
    

    switch (action.type) {
        case "LOAD_ITEMDETAIL_SUCCESS":
            return action.productDetail
        case "LOADPROFILE_SUCCESS":
            return action.resProfileSuccess

        default:
            return state



    }
}

export default users