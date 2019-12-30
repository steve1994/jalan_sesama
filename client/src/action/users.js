import { request } from "../helpers/accessAPI";

const API_URL = "http://192.168.100.12:3001/api";


//POST PROFILE
export const loadProfileSuccess = (resProfileSuccess) => ({
    type: "LOADPROFILE_SUCCESS",
    resProfileSuccess
})
export const loadProfileFailure = (resProfileFailure) => ({
    type: "LOADPROFILE_FAILURE",
    resProfileFailure
})
export const postProfile = (idUser) => {

    console.log("postProfile", idUser);

    return dispatch => {
        return fetch(`${API_URL}/users/${idUser}`, {
            method: 'GET',
            headers: {
                Accept: 'applications/json',
                'Content-Type': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((responseData) => {

                dispatch(loadProfileSuccess(responseData.data))
            })
            .catch((error) => {

                dispatch((loadProfileFailure(error)))

            })

    }

}

//LogoutSession

export const processLogoutSuccess = () => ({
    type: "PROCESS_LOGOUT"
})

export const processLogout = () => {


    return dispatch => {   
        dispatch(processLogoutSuccess())
    }
}

//loginprocess
export const loginProcessSuccess = (responseLogin) => ({
    type: "LOGINSUCCESS",
    responseLogin
})

export const loginProcessFailure = (responseLoginFailure) => ({
    type: "LOGIN_FAILURE",
    responseLoginFailure
})

export const loginProcess = (username, password) => {

    console.log("DATA LOGIN", username, password);

    return dispatch => {
        return fetch(`${API_URL}/users/login/${username}/${password}`, {
            method: 'GET',
            headers: {
                Accept: 'aplications/json',
                'Content-Type': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((responseData) => {
                let arrLogin = [...responseData.data]
                var resultLogin = arrLogin.map(function (addIdUser) {
                    addIdUser.idUser = responseData.data[0]._id;
                    return addIdUser;
                })

                dispatch(loginProcessSuccess(resultLogin))

            })
            .catch((error) => {




                dispatch(loginProcessFailure(error))



            })

    }

}

export const postRegisterSuccess = () => ({
    type: "POST_REG",
})

export const postRegister = (nama, alamat, username, password, filename) => {
    return dispatch => {
        return fetch(`${API_URL}/users`, {
            method: 'POST',
            headers: {
                Accept: 'aplication/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nama, alamat, username, password })
        })
            .then((response) => response.json())
            .then((responseJson) => {

                let idUser = responseJson.data._id
                let formData = new FormData()
                formData.append('files', {
                    type: "image/jpeg",
                    uri: filename,
                    name: 'photo'
                });

                return fetch(`${API_URL}/users/uploadphoto/${idUser}`, {
                    method: 'PUT',
                    body: formData,

                })
                    .then((response) => response.json())
                    .then((responseJson) => {
                        // console.log('data respon',responseJson );

                    })

                    .catch((error) => {
                        console.log('error send PUT', error);

                    })
            })


    }
}