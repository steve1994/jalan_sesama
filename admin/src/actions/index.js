import axios from 'axios';
var path = require('path');

const API_URL = 'http://localhost:3001/api/'

const request = axios.create({
    baseURL: API_URL,
    timeout: 1000
})

export const loadVerificationSuccess = (pantisData,sesamasData) => ({
    type: 'LOAD_VERIFICATION_SUCCESS',
    pantisData,
    sesamasData
})

export const loadVerificationFailure = () => ({
    type: 'LOAD_VERIFICATION_FAILURE'
})

export const loadVerification = () => {
    return dispatch => {
        return request.get(`pantis`)
        .then(function(response) {
            let pantisData = response;
            return request.get(`sesamas`)
            .then(function(response) {
                let sesamasData = response;
                dispatch(loadVerificationSuccess(pantisData,sesamasData));
            })
        })
        .catch(function(error) {
            console.error(error);
            dispatch(loadVerificationFailure());
        })
    }
}

export const putStatusSuccess = (pantisData,sesamasData) => ({
    type: 'PUT_STATUS_SUCCESS',
    pantisData,
    sesamasData
})

export const putStatusFailure = () => ({
    type: 'PUT_STATUS_FAILURE'
})

export const putStatus = (type,idPantiOrBantu,status) => {
    return dispatch => {
        if (type == "panti") {
            return request.put(`pantis/status/${idPantiOrBantu}/${status}`)
            .then(function(response) {
                return request.get(`pantis`)
                .then(function(response) {
                    let pantisData = response;
                    return request.get(`sesamas`)
                    .then(function(response) {
                        let sesamasData = response;
                        dispatch(loadVerificationSuccess(pantisData,sesamasData));
                    })
                })
            })
            .catch(function(error) {
                console.error(error);
                dispatch(putStatusFailure());
            })
        } else if (type == "sesama") {
            return request.put(`sesamas/status/${idPantiOrBantu}/${status}`)
            .then(function(response) {
                return request.get(`pantis`)
                .then(function(response) {
                    let pantisData = response;
                    return request.get(`sesamas`)
                    .then(function(response) {
                        let sesamasData = response;
                        dispatch(loadVerificationSuccess(pantisData,sesamasData));
                    })
                })
            })
            .catch(function(error) {
                console.error(error);
                dispatch(putStatusFailure());
            })
        }
    }
}

export const loadAnggaranSuccess = (anggaranData) => ({
    type: 'LOAD_ANGGARAN_SUCCESS',
    anggaranData
})

export const loadAnggaranFailure = () => ({
    type: 'LOAD_ANGGARAN_FAILURE'
})

export const loadAnggaran = () => {
    return dispatch => {
        return request.get(`danas/complete`)
        .then(function(response) {
            let anggaranData = response;
            dispatch(loadAnggaranSuccess(anggaranData));
        })
        .catch(function(error) {
            console.error(error);
            dispatch(loadAnggaranFailure());
        })
    }
}

export const setNominalSuccess = (anggaranData) => ({
    type: 'SET_NOMINAL_SUCCESS',
    anggaranData
})

export const setNominalFailure = () => ({
    type: 'SET_NOMINAL_FAILURE'
})

export const setNominal = (idAnggaran,nominal) => {
    return dispatch => {
        return request.put(`danas/setnominal/${idAnggaran}/${nominal}`)
        .then(function (response) {
            return request.get(`danas/complete`)
            .then(function(response) {
                let anggaranData = response;
                dispatch(setNominalSuccess(anggaranData));
            })
        })
        .catch(function(error) {
            console.error(error)
            dispatch(setNominalFailure());
        })
    }
}

export const putStatusAnggaranSuccess = (anggaranData) => ({
    type: 'PUT_STATUS_ANGGARAN_SUCCESS',
    anggaranData
})

export const putStatusAnggaranFailure = () => ({
    type: 'PUT_STATUS_ANGGARAN_FAILURE'
})

export const putStatusAnggaran = (idAnggaran,status) => {
    return dispatch => {
        return request.put(`danas/status/${idAnggaran}/${status}`)
        .then(function(response) {
            return request.get(`danas/complete`)
            .then(function(response) {
                let anggaranData = response;
                dispatch(putStatusAnggaranSuccess(anggaranData));
            })
        })
        .catch(function(error) {
            console.error(error);
            dispatch(putStatusAnggaranFailure());
        })
    }
}

export const deleteAnggaranPantiSuccess = (anggaranData) => ({
    type : 'DELETE_ANGGARAN_PANTI_SUCCESS',
    anggaranData
})

export const deleteAnggaranPantiFailure = () => ({
    type : 'DELETE_ANGGARAN_PANTI_FAILURE'
})

export const deleteAnggaranPanti = (idPanti) => {
    return dispatch => {
        return request.delete(`danas/panti/${idPanti}`)
        .then(function (response) {
            return request.get(`danas/complete`)
            .then(function(response) {
                let anggaranData = response;
                dispatch(deleteAnggaranPantiSuccess(anggaranData));
            })
        })
        .catch(function (error) {
            console.error(error);
            dispatch(deleteAnggaranPantiFailure());
        })
    }
}

export const deleteAnggaranSesamaSuccess = (anggaranData) => ({
    type : 'DELETE_ANGGARAN_SESAMA_SUCCESS',
    anggaranData
})

export const deleteAnggaranSesamaFailure = () => ({
    type : 'DELETE_ANGGARAN_SESAMA_FAILURE'
})

export const deleteAnggaranSesama = (idSesama) => {
    return dispatch => {
        return request.delete(`danas/sesama/${idSesama}`)
        .then(function (response) {
            return request.get(`danas/complete`)
            .then(function(response) {
                let anggaranData = response;
                dispatch(deleteAnggaranSesamaSuccess(anggaranData));
            })
        })
        .catch(function (error) {
            console.error(error);
            dispatch(deleteAnggaranSesamaFailure());
        })
    }
}

export const loadPantiSuccess = (dataPanti) => ({
    type : 'LOAD_PANTI_SUCCESS',
    dataPanti
})

export const loadPantiFailure = () => ({
    type : 'LOAD_PANTI_FAILURE'
})

export const loadPanti = () => {
    return dispatch => {
        return request.get(`pantis`)
        .then(function(response) {
            let dataPanti = response;
            dispatch(loadPantiSuccess(dataPanti));
        })
        .catch(function (error) {
            console.error(error);
            dispatch(loadPantiFailure());
        })
    }
}

export const deletePantiSuccess = (dataPanti) => ({
    type : 'DELETE_PANTI_SUCCESS',
    dataPanti
})

export const deletePantiFailure = () => ({
    type : 'DELETE_PANTI_FAILURE'
})

export const deletePanti = (idPanti) => {
    return dispatch => {
        return request.delete(`pantis/${idPanti}`)
        .then(function(response) {
            return request.get(`pantis`)
            .then(function(response) {
                let dataPanti = response;
                dispatch(deletePantiSuccess(dataPanti));
            })
        })
        .catch(function(error) {
            console.error(error);
            dispatch(deletePantiFailure());
        })
    }
}

export const editPantiSuccess = (dataPanti) => ({
    type : 'EDIT_PANTI_SUCCESS',
    dataPanti
})

export const editPantiFailure = () => ({
    type : 'EDIT_PANTI_FAILURE'
})

export const editPanti = (idPanti,nama,judul,alamat,deskripsi,jumlahOrang,foto,location) => {
    return dispatch => {
        return request.put(`pantis/${idPanti}`,{nama,judul,alamat,deskripsi,jumlahOrang,foto,location})
        .then(function (response) {
            return request.get(`pantis`)
            .then(function(response) {
                let dataPanti = response;
                dispatch(editPantiSuccess(dataPanti));
            })
        })
        .catch(function (error) {
            console.error(error);
            dispatch(editPantiFailure());
        })
    }
}

export const loadSesamaSuccess = (dataSesama) => ({
    type : 'LOAD_SESAMA_SUCCESS',
    dataSesama
})

export const loadSesamaFailure = () => ({
    type : 'LOAD_SESAMA_FAILURE'
})

export const loadSesama = () => {
    return dispatch => {
        return request.get(`sesamas`)
        .then(function(response) {
            let dataSesama = response;
            dispatch(loadSesamaSuccess(dataSesama));
        })
        .catch(function (error) {
            console.error(error);
            dispatch(loadSesamaFailure());
        })
    }
}

export const deleteSesamaSuccess = (dataSesama) => ({
    type : 'DELETE_SESAMA_SUCCESS',
    dataSesama
})

export const deleteSesamaFailure = () => ({
    type : 'DELETE_SESAMA_FAILURE'
})

export const deleteSesama = (idSesama) => {
    return dispatch => {
        return request.delete(`sesamas/${idSesama}`)
        .then(function(response) {
            return request.get(`sesamas`)
            .then(function(response) {
                let dataSesama = response;
                dispatch(deleteSesamaSuccess(dataSesama));
            })
        })
        .catch(function(error) {
            console.error(error);
            dispatch(deleteSesamaFailure());
        })
    }
}

export const editSesamaSuccess = (dataSesama) => ({
    type : 'EDIT_SESAMA_SUCCESS',
    dataSesama
})

export const editSesamaFailure = () => ({
    type : 'EDIT_SESAMA_FAILURE'
})

export const editSesama = (idSesama,nama,judul,alamat,deskripsi,foto,location) => {
    return dispatch => {
        return request.put(`sesamas/${idSesama}`,{nama,judul,alamat,deskripsi,foto,location})
        .then(function (response) {
            return request.get(`sesamas`)
            .then(function(response) {
                let dataSesama = response;
                dispatch(editSesamaSuccess(dataSesama));
            })
        })
        .catch(function (error) {
            console.error(error);
            dispatch(editSesamaFailure());
        })
    }
}

export const loadNotificationSuccess = (dataNotification) => ({
    type : 'LOAD_NOTIFICATION_SUCCESS',
    dataNotification,
})

export const loadNotificationFailure = () => ({
    type : 'LOAD_NOTIFICATION_FAILURE'
})

export const loadNotification = () => {
    return dispatch => {
        return request.get(`notifications`)
        .then(function (response) {
            dispatch(loadNotificationSuccess(response));
        })
        .catch(function (error) {
            console.error(error);
            dispatch(loadNotificationFailure());
        })
    }
}

export const postRegisterSuccess = (dataUser) => ({
    type: 'POST_REGISTER_USER_SUCCESS',
    dataUser
})

export const postRegisterFailure = () => ({
    type: 'POST_REGISTER_USER_FAILURE'
})

export const postRegisterUser = (nama, alamat, username, password) => {
    return dispatch => {
        return request.post('users/admin',{nama,alamat,username,password})
        .then(function (response) {
            dispatch(postRegisterSuccess(response.data));
        })
        .catch(function (error) {
            console.error(error);
            dispatch(postRegisterFailure());
        })
    }
}

export const postLoginSuccess = (dataUser) => ({
    type: 'POST_LOGIN_USER_SUCCESS',
    dataUser
})

export const postLoginFailure = () => ({
    type: 'POST_LOGIN_USER_FAILURE'
})

export const postLoginUser = (username,password) => {
    return dispatch => {
        return request.post(`users/login_admin`,{username,password})
        .then(function (response) {
            localStorage.setItem("user",JSON.stringify(response.data));
            dispatch(postLoginSuccess(response.data));
        })
        .catch(function (error) {
            console.error(error);
            dispatch(postLoginFailure());
        })
    }
}
