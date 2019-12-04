const store = function (state = [], action) {

    console.log('data Reduc', action);


    switch (action.type) {

        case "POST_PANTI_SUCCESS":
            return [...action.galangKamu]
        case 'POST_PANTI_FAILED':

        case 'LOAD_GLKAMU_SUCCESS':
            return [...action.galangKamu]
        case 'LOAD_GLKAMU_FAILURE':

        case 'LOADDETAIL_KONTRIB':
            return [...action.detailKontrib]
        
        




        default:
            return state



    }
}

export default store