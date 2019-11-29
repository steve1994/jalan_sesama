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
