const panti = (state = [], action) => {
    switch(action.type) {
        case 'DELETE_PANTI_SUCCESS':
        case 'EDIT_PANTI_SUCCESS':
        case 'LOAD_PANTI_SUCCESS':
            let pantiFiltered = action.dataPanti.data.filter((item)=>(item.status == 'approved'));
            let pantiReturn = pantiFiltered.map((item,index) => {
                return {OriginId:item._id,
                        Nama:item.nama,
                        Alamat:item.alamat,
                        Judul:item.judul,
                        Deskripsi:item.deskripsi,
                        JumlahOrang:item.jumlahOrang,
                        Photo:item.foto,
                        Location:item.location}; })
            return pantiReturn;
        case 'DELETE_PANTI_FAILURE':
        case 'EDIT_PANTI_FAILURE':
        case 'LOAD_PANTI_FAILURE':
        default:
            return state;
    }
}

export default panti;
