const Donations = function (state = [], action) {


    console.log("Reduce Donations", action.loadAllDataDonations);

    switch (action.type) {

        case 'LOAD_DONASI_SUCCESS':
            return [...action.DataDonasi]
            
        case 'PENGGALANGAN_SUCCESS':
            return [...action.penggalangan.penggalangan]

        case 'PUT_NOMINAL_SUCCESS':
            return [...action.responseNominal]

        case 'LOAD_ALLDATA_SUCCESS':
            return [...action.loadAllDataDonations]

        default:
            return state



    }
}

export default Donations