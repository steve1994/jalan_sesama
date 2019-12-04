const Donations = function (state = [], action) {



    switch (action.type) {

        case 'LOAD_DONASI_SUCCESS':
            return [...action.DataDonasi]
            
        case 'PENGGALANGAN_SUCCESS':
            return [...action.penggalangan.penggalangan]

        default:
            return state



    }
}

export default Donations