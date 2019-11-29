const anggaran = (state = [], action) => {
    switch(action.type) {
        case 'SET_NOMINAL_SUCCESS':
        case 'LOAD_ANGGARAN_SUCCESS':
        case 'PUT_STATUS_ANGGARAN_SUCCESS':
        case 'DELETE_ANGGARAN_PANTI_SUCCESS':
        case 'DELETE_ANGGARAN_SESAMA_SUCCESS':
            let anggaran = action.anggaranData.data.map((item,index) => {
                return {OriginId:item._id,
                        NamaPantiOrBantu:item.namaPantiOrBantu,
                        NamaGalangDana:item.nama,
                        Alamat:item.alamat,
                        Judul:item.judul,
                        Deskripsi:item.deskripsi,
                        Foto:item.foto,
                        NominalGalang:item.nominalSet,
                        Status:item.status}; })
            return anggaran;
        case 'SET_NOMINAL_FAILURE':
        case 'LOAD_ANGGARAN_FAILURE':
        case 'PUT_STATUS_ANGGARAN_FAILURE':
        case 'DELETE_ANGGARAN_PANTI_FAILURE':
        case 'DELETE_ANGGARAN_SESAMA_FAILURE':
        default:
            return state;
    }
}

export default anggaran;
