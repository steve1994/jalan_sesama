const sesama = (state = [], action) => {
    switch(action.type) {
        case 'DELETE_SESAMA_SUCCESS':
        case 'EDIT_SESAMA_SUCCESS':
        case 'LOAD_SESAMA_SUCCESS':
            let sesamaFiltered = action.dataSesama.data.filter((item)=>(item.status == 'approved'));
            let sesamaReturn = sesamaFiltered.map((item,index) => {
                return {OriginId:item._id,
                        Nama:item.nama,
                        Alamat:item.alamat,
                        Judul:item.judul,
                        Deskripsi:item.deskripsi,
                        Photo:item.foto,
                        Location:item.location}; })
            return sesamaReturn;
        case 'DELETE_SESAMA_FAILURE':
        case 'EDIT_SESAMA_FAILURE':
        case 'LOAD_SESAMA_FAILURE':
        default:
            return state;
    }
}

export default sesama;
