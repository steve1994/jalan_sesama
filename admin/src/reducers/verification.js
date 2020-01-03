const verification = (state = [], action) => {
    switch(action.type) {
        case 'PUT_STATUS_SUCCESS':
        case 'LOAD_VERIFICATION_SUCCESS':
            console.log("VERIFICATION SUCCESS",action.pantisData,action.sesamasData);
            let pantis = action.pantisData.data.map((item,index) => {
                console.log("PANTI STATUS : ", item.status);
                return {OriginId: item._id,
                        Name: item.nama,
                        Title: item.judul,
                        Address: item.alamat,
                        Description: item.deskripsi,
                        Photo: item.foto,
                        Location: item.location,
                        Status:item.status,
                        Type:"panti"}; })
            let sesamas = action.sesamasData.data.map((item,index) => {
                console.log("SESAMA STATUS : ", item.status);
                return {OriginId: item._id,
                        Name: item.nama,
                        Title: item.judul,
                        Address: item.alamat,
                        Description: item.deskripsi,
                        Photo: item.foto,
                        Location: item.location,
                        Status:item.status,
                        Type:"sesama"}; })
            return [...pantis,...sesamas];
        case 'PUT_STATUS_FAILURE':
        case 'LOAD_VERIFICATION_FAILURE':
        default:
            return state;
    }
}

export default verification;
