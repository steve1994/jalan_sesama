const API_URL = "http://192.168.100.12:3001/api";

//DeleteChat
export const deleteChatSuccess = (successDeleteChat) => ({
    type:'DELETE_CHAT_SUCCESS',
    successDeleteChat
})
export const deleteChatError = (errorDeleteChat) => ({
    type:'DELETE_CHAT_ERROR',
    errorDeleteChat
})
export const deleteChat = (idUser) => {
    return dispatch => {
        return fetch(`${API_URL}/chats/${idUser}`, {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((responseDelete) => {

                dispatch(deleteChatSuccess(responseDelete))

            })
            .catch((error) => {
                dispatch(deleteChatError(error))
            })
    }
}

//PostChat
export const postChatSuccess = (chatPostSuccess) => ({
    type: 'POST_CHAT_SUCCESS',
    chatPostSuccess
})
export const errorPostChat = (errorPostChat) => ({
    type: 'POST_CHAT_ERROR',
    errorPostChat
})

export const postChats = (idUser, userName, message) => {

    return dispatch => {
        return fetch(`${API_URL}/chats`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ idUser, userName, message })
        })
            .then((response) => response.json())
            .then((responseChat) => {
                dispatch(postChatSuccess(responseChat))

            })
            .catch((error) => {
                dispatch(errorPostChat(error))
            })
    }

}

//Delete For Rejected
export const deleteSuccess = (deleteDATASuccess) => ({
    type: "DELETE_DATA_GALANG",
    deleteDATASuccess
})

export const deleteReject = (_id, type) => {

    return dispatch => {

        if (type == "panti") {
            return fetch(`${API_URL}/pantis/${_id}`, {
                method: 'DELETE',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then((response) => response.json())
                .then((responseDelete) => {
                    dispatch(deleteSuccess(responseDelete))
                })
        } else {

            return fetch(`${API_URL}/sesamas/${_id}`, {
                method: 'DELETE',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }

            })
                .then((response) => response.json())
                .then((responseDelete) => {
                    dispatch(deleteSuccess(responseDelete))
                })
        }
    }
}


// export post panti
export const postPanti = (
    idUser,
    judul,
    nama,
    alamat,
    deskripsi,
    jumlahOrang,
    location,
    fotoPanti) => {




    return dispatch => {

        // dispatch(postDataPanti( idUser , nama, alamat, deskripsi, jumlahOrang, location, fotoPanti))
        return fetch(`${API_URL}/pantis/${idUser}`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ idUser, judul, nama, alamat, deskripsi, jumlahOrang, location })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log('response ACT', responseJson.data);

                let idPanti = responseJson.data._id
                let formData = new FormData()
                formData.append('files', {
                    type: "image/jpeg",
                    uri: fotoPanti,
                    name: 'photo'
                });

                return fetch(`${API_URL}/pantis/uploadphoto/${idPanti}`, {
                    method: 'PUT',
                    body: formData,
                })
                    .then((response) => response.json())
                    .then((responseJson) => {


                        // dispatch(postPantiSuccess(responseJson.data))


                    })
                    .catch((error) => {
                        console.log('panti action error Put > ', error);
                        // dispatch(postPantiFailed(error))

                    })

            })
            .catch((error) => {
                console.log('error act panti', error);
                dispatch(postPantiFailed(error))

            })
    }
}


//load all data panti
export const loadAllPantiSuccess = (responseAllPanti) => ({
    type: "LOAD_ALLPANTI_SUCCESS",
    responseAllPanti
})
export const loadAllPanti = () => {

    console.log("load data");

    return dispatch => {
        return fetch(`${API_URL}/pantis`, {
            method: 'GET',
            headers: {
                Accept: 'applications/json',
                'Content-Type': 'applications'
            },
        })
            .then((response) => response.json())
            .then((responseLoad) => {
                let arrSesama = responseLoad
                var resultPanti = arrSesama.map(function (addSesama) {
                    addSesama.type = "panti";
                    return addSesama;
                })
                dispatch(loadAllPantiSuccess(resultPanti))

            })
            .catch((error) => {
                console.log("LOAD all Panti Err", error);

            })
    }
}


//load semua data donasi 
export const loadAllDataSuccess = (loadAllDataDonations) => ({
    type: "LOAD_ALLDATA_SUCCESS",
    loadAllDataDonations
})

export const loadAllDonations = () => {

    return dispatch => {
        return fetch(`${API_URL}/danas`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'applications'
            },


        })
            .then((response) => response.json())
            .then((responseLoad) => {
                dispatch(loadAllDataSuccess(responseLoad))

            })
            .catch((error) => {

                console.log("GET ERROR", error);

            })
    }

}

//PUT BERIKAN DONASI
export const putNominalDonasiSuccess = (responseNominal) => ({
    type: "PUT_NOMINAL_SUCCESS",
    responseNominal
})

export const putNominalDonasi = (idGalangDana, nominal) => {


    return dispatch => {

        return fetch(`${API_URL}/danas/addnominal/${idGalangDana}/${nominal}`, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            // body: JSON.stringify({ idUser, judul, nama, alamat, deskripsi, jumlahOrang, location })
        })
            .then((response) => response.json())
            .then((responseData) => {

                dispatch(putNominalDonasiSuccess(responseData))


            })
            .catch((error) => {

                console.log("ACT ERROR PUT NOMINAL", error);

            })

    }

}



//LOAD DETAIL DONASI(Folder : component/datakontrib/Donations.js)
export const loadDetailDonasiSuccess = (responseDetail) => ({
    type: "LOAD_DETAIL_DONASI",
    responseDetail
})



export const loadDetailDonasi = (_id, type) => {

    console.log("DATA LOAD", _id, type);


    return dispatch => {

        if (type == "panti") {

            let idBantuSesama = _id
            return fetch(`${API_URL}/danas/pantiDetail/${idBantuSesama}`)
                .then((response) => response.json())
                .then((responseDATA) => {

                    let arrSesama = [...responseDATA]
                    var resultPanti = arrSesama.map(function (addSesama) {
                        addSesama.type = "panti";
                        return addSesama;
                    })

                    dispatch(loadDetailDonasiSuccess(resultPanti))

                })
                .catch((error) => {
                    console.log("data DETAIL ", error);

                })

        } else {

            let idBantuSesama = _id
            return fetch(`${API_URL}/danas/sesamaDetail/${idBantuSesama}`)
                .then((response) => response.json())
                .then((responseDATA) => {

                    let arrSesama = [...responseDATA]
                    var resultPanti = arrSesama.map(function (addSesama) {
                        addSesama.type = "sesama";
                        return addSesama;
                    })

                    dispatch(loadDetailDonasiSuccess(resultPanti))

                })
                .catch((error) => {
                    console.log("data DETAIL ", error);

                })
        }
    }
}



// GET PENGGALANGAN DANA\
export const loadDataDonasiSuccess = (DataDonasi) => ({
    type: "LOAD_DONASI_SUCCESS",
    DataDonasi
})

export const loadDataPenggalang = (dataPenggalangan) => {

    // console.log("ACT DATA PENGGALAN > ", dataPenggalangan);


    return dispatch => {

        if (dataPenggalangan[0].type == "panti") {
            return fetch(`${API_URL}/danas/panti/${dataPenggalangan[0].idUsing}`)
                .then((response) => response.json())
                .then((responseDATA) => {

                    let arrPanti = [...responseDATA]
                    var resultPanti = arrPanti.map(function (addPanti) {
                        addPanti.type = "panti";
                        return addPanti;
                    })

                    dispatch(loadDataDonasiSuccess(resultPanti))

                })
                .catch((error) => {

                    console.log("error loadDataPenggalang > ", error);


                })

        } else {

            return fetch(`${API_URL}/danas/sesama/${dataPenggalangan[0].idUsing}`)
                .then((response) => response.json())
                .then((responseDATA) => {

                    let arrSesama = [...responseDATA]
                    var resultSesama = arrSesama.map(function (addPanti) {
                        addPanti.type = "sesama";
                        return addPanti;
                    })

                    dispatch(loadDataDonasiSuccess(resultSesama))


                })
                .catch((error) => {
                    console.log("error loadDataPenggalang > ", error);


                })

        }


    }


}


// POST PENGGGALANG (FOLDER :container/DtKOntrib/addDonasi.js )
export const postGALANGSuccess = (penggalangan) => ({
    type: "PENGGALANGAN_SUCCESS",
    penggalangan
})


export const postPenggalangan = (idUsing, nama, alamat, type, judul, deskripsi, nominalSet, fotoGalang) => {

    return dispatch => {

        if (type === "panti") {

            let idPanti = idUsing;
            return fetch(`${API_URL}/danas/panti/${idPanti}`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ idPanti, nama, alamat, type, judul, deskripsi, nominalSet })
            })
                .then((response) => response.json())
                .then((responseDATA) => {


                    let idGalangDana = responseDATA.data._id
                    let formData = new FormData()
                    formData.append('files', {
                        type: "image/jpeg",
                        uri: fotoGalang,
                        name: 'photo'
                    });

                    return fetch(`${API_URL}/danas/uploadphoto/${idGalangDana}`, {
                        method: 'PUT',
                        body: formData,
                    })
                        .then((response) => response.json())
                        .then((responseJson) => {

                            dispatch(postGALANGSuccess(responseJson))

                        })
                        .catch((error) => {
                            console.log('panti action error Put > ', error);
                            // dispatch(postGALANGFailed())

                        })



                })
                .catch((error) => {
                    console.error(error);
                    // dispatch(loadGlKamuFailure())

                })

        } else {

            let idSesama = idUsing;
            return fetch(`${API_URL}/danas/sesama/${idSesama}`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ idSesama, nama, alamat, type, judul, deskripsi, nominalSet })
            })
                .then((response) => response.json())
                .then((responseDATA) => {

                    console.log("respon SESAMA", responseDATA);

                    let idGalangDana = responseDATA.data._id
                    let formData = new FormData()
                    formData.append('files', {
                        type: "image/jpeg",
                        uri: fotoGalang,
                        name: 'photo'
                    });

                    return fetch(`${API_URL}/danas/uploadphoto/${idGalangDana}`, {
                        method: 'PUT',
                        body: formData,
                    })
                        .then((response) => response.json())
                        .then((responseJson) => {

                            console.log("response EDIT", responseJson);
                            dispatch(postGALANGSuccess(responseJson))



                        })
                        .catch((error) => {
                            console.log('panti action error Put > ', error);
                            // dispatch(postPantiFailed())

                        })


                })
                .catch((error) => {
                    console.error(error);
                    // dispatch(loadGlKamuFailure())

                })

        }

    }
}

//POST SESAMA (add data Bantu sesama folder: container/galangKamu/addSesama.js)
export const postSesama = (
    idUser,
    judul,
    nama,
    alamat,
    deskripsi,
    location,
    fotoSesama) => {
    console.log("idACT", idUser);


    return dispatch => {

        return fetch(`${API_URL}/sesamas/${idUser}`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ idUser, judul, nama, alamat, deskripsi, location })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log('response ACT', responseJson.data);

                let idSesama = responseJson.data._id
                let formData = new FormData()
                formData.append('files', {
                    type: "image/jpeg",
                    uri: fotoSesama,
                    name: 'photo'
                });

                return fetch(`${API_URL}/sesamas/uploadphoto/${idSesama}`, {
                    method: 'PUT',
                    body: formData,
                })
                    .then((response) => response.json())
                    .then((responseJson) => {
                        // dispatch(postPantiSuccess(responseJson.data))


                    })
                    .catch((error) => {
                        console.log('panti action error Put > ', error);
                        // dispatch(postPantiFailed())

                    })

            })
            .catch((error) => {
                console.log('error act panti', error);
                // dispatch(postPantiFailed())

            })
    }
}


// loadDetailDTKontrib (container/galangkamu/ListGalang.js)
export const loadDetailDTKontrib = (detailKontrib) => ({
    type: 'LOADDETAIL_KONTRIB',
    detailKontrib

})

export const loadDetailGL = (idUsing, type) => {

    return dispatch => {

        if (type == 'panti') {

            return fetch(`${API_URL}/pantis/detailPanti/${idUsing}`, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
            })
                .then((response) => response.json())
                .then((responseDATA) => {
                    let arrPanti = [responseDATA]
                    var resultPanti = arrPanti.map(function (addPanti) {
                        addPanti.type = "panti";
                        return addPanti;
                    })

                    dispatch(loadDetailDTKontrib(resultPanti))

                })
                .catch((error) => {
                    console.error(error);
                    // dispatch(loadGlKamuFailure())

                })



        } else {

            console.log("sesama");

            return fetch(`${API_URL}/sesamas/detailSesama/${idUsing}`, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
            })
                .then((response) => response.json())
                .then((responseDATA) => {
                    let arrSesama = [responseDATA]
                    var resultSesama = arrSesama.map(function (addPanti) {
                        addPanti.type = "sesama";
                        return addPanti;
                    })

                    dispatch(loadDetailDTKontrib(resultSesama))

                })
                .catch((error) => {
                    console.error(error);
                    // dispatch(loadGlKamuFailure())

                })

        }


    }

}


//LOAD galangKamu (LIST SEMUA PENGGALANGAN folder: container/galangKamu/galangKamu.js)
export const loadGlKamuSuccess = (galangKamu) => ({
    type: 'LOAD_GLKAMU_SUCCESS',
    galangKamu

})

export const loadGlKamuFailure = () => ({
    type: 'LOAD_GLKAMU_FAILURE'
})

export const loadGlKamu = (idUser) => {


    return dispatch => {
        // idUser Sementara
        return fetch(`${API_URL}/pantis/${idUser}`, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
        })

            .then((response) => response.json())
            .then((responsePanti) => {

                return fetch(`${API_URL}/sesamas/${idUser}`, {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                })
                    .then((response) => response.json())
                    .then((responseSesama) => {

                        let arrPanti = [...responsePanti]
                        var resultPanti = arrPanti.map(function (addPanti) {
                            addPanti.type = "panti";
                            return addPanti;
                        })

                        let arrSesama = [...responseSesama]
                        var resultSesama = arrSesama.map(function (addSesama) {
                            addSesama.type = "sesama";
                            return addSesama;
                        })




                        let concatGalang = [...resultPanti, ...resultSesama]

                        dispatch(loadGlKamuSuccess(concatGalang))
                    })
            })
            .catch((error) => {
                console.error(error);
                dispatch(loadGlKamuFailure())

            })
    }
}
