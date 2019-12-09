const store = function (state = [], action) {


    console.log("Reduce Store", action.detailKontrib);


    switch (action.type) {

        case "POST_PANTI_SUCCESS":
            return [...action.galangKamu]
        case 'POST_PANTI_FAILED':

        case 'LOAD_GLKAMU_SUCCESS':
            return [...action.galangKamu]
        case 'LOAD_GLKAMU_FAILURE':

        case 'LOADDETAIL_KONTRIB':
            return [...action.detailKontrib]
            
        case 'LOAD_ALLPANTI_SUCCESS':
            return action.responseAllPanti







        default:
            return state



    }
}

export default store