const DetailGalang = function (state = [], action) {

    console.log("Reduce", action.responseDetail);
    

    switch (action.type) {

        case 'LOAD_DETAIL_DONASI':
                return [...action.responseDetail]
        default:
            return state



    }
}

export default DetailGalang