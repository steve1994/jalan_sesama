import React from "react";
import { connect } from "react-redux";

import { ProgressBarAndroid, StyleSheet, Image, View, TextInput, TouchableOpacity, PixelRatio } from 'react-native';
import ImagePicker from 'react-native-image-picker';


import {
    Container,
    Header,
    Title,
    Content,
    Footer,
    FooterTab,
    Button,
    Left,
    Right,
    Body,
    Icon,
    Text,
    Item,
    Card,
    ListItem,
    CardItem,
    Row,
    List,
    Tabs,
    Tab,
    TabHeading,
    Form,
    Label,
    Input,
    Textarea
} from 'native-base';

export default class FormRegis extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            nama: '',
            alamat: '',
            username: '',
            password: '',
            uploading: null
        };
        this.handleNama = this.handleNama.bind(this);
        this.handleAlamat = this.handleAlamat.bind(this);
        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.buttonSignup = this.buttonSignup.bind(this);
    }

    handleNama(value) {
        this.setState({ nama: value })
    }

    handleAlamat(value) {
        this.setState({ alamat: value })
    }

    handleUsername(value) {
        this.setState({ username: value })
    }

    handlePassword(value) {
        this.setState({ password: value })
    }

    selectPhotoTapped() {
        const options = {
            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500,
            mediaType: 'photo',
            storageOptions: {
                skipBackup: true
            }
        };

        ImagePicker.showImagePicker(options, (response) => {
            // console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled photo picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                let dataRes = response.fileName;
                
                let source = { uri: response.uri };
                console.log('dataRes', source);

                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({

                    uploadImg: source,
                    filename: response.uri

                });
            }
        });
    }

    buttonSignup() {

        this.props.postRegister(
            this.state.nama,
            this.state.alamat,
            this.state.username,
            this.state.password,
            this.state.filename
        );

    }

    render() {
        return (

            <View
                behavior="padding"
                style={styles.Wrapper}>
                <TextInput
                    placeholder='Nama'
                    underlineColorAndroid='white'
                    placeholderTextColor='white'
                    keyboardType='Nama'
                    style={styles.inputField} onChangeText={this.handleNama} />
                <TextInput
                    placeholder='Alamat'
                    underlineColorAndroid='white'
                    placeholderTextColor='white'
                    keyboardType='Alamat'
                    style={styles.inputField} onChangeText={this.handleAlamat} />
                <TextInput
                    placeholder='Username'
                    underlineColorAndroid='white'
                    placeholderTextColor='white'
                    keyboardType='Username'
                    style={styles.inputField} onChangeText={this.handleUsername} />
                <TextInput
                    placeholder='password'
                    underlineColorAndroid='white'
                    placeholderTextColor='white'
                    secureTextEntry={true}
                    style={styles.inputField} onChangeText={this.handlePassword} />

                <Item style={styles.inputField}>
                        <Label style={{ color: "white", fontSize:15 }}>Take Pict</Label>
                    <Card style={{ height:100, left:70 }}>

                        <TouchableOpacity  onPress={this.selectPhotoTapped.bind(this)}>

                            <View style={styles.ImageContainer}>

                                {this.state.uploadImg === null ? <Text>Select a Photo</Text> :
                                    <Image style={styles.ImageContainer} source={this.state.uploadImg} />
                                }

                            </View>

                        </TouchableOpacity>
                    </Card>
                </Item>

               


                <TouchableOpacity onPress={this.buttonSignup}>
                    <Text style={{ color: 'white', marginTop: 10 }}>Signup</Text>
                </TouchableOpacity>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    inputField: {
        width: 280,
        color: 'white',
        borderColor: 'white',
        marginTop: 5
    },
    Wrapper: {

        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1F3A93',
        height: 490
    },
    text: {
        color: 'blue',
        fontSize: 23
    },

    container: {
        flex: 1,
    },

    ImageContainer: {
        borderRadius: 10,
        width: 100,
        height: 100,
        borderColor: '#9B9B9B',
        borderWidth: 1 / PixelRatio.get(),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#CDDC39',

    },
});