const DetailGalang = function (state = [], action) {

    // console.log("Reduce DetailGalang", action.responseAllPanti);
    

    switch (action.type) {

        case 'LOAD_DETAIL_DONASI':
            return [...action.responseDetail]
        

        default:
            return state



    }
}

export default DetailGalang