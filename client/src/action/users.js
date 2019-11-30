import { request } from "../helpers/accessAPI";

const API_URL = "http://192.168.1.21:3001/api";


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