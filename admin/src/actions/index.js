import axios from 'axios';
var path = require('path');

const API_URL = 'http://localhost:3001/api/'

const request = axios.create({
    baseURL: API_URL,
    timeout: 1000
})

// LOAD PRODUCTS

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
                console.log("pantisdata : ", pantisData);
                console.log("sesamasdata : ", sesamasData);
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
