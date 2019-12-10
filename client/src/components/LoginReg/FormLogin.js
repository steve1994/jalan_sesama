import React from "react"
import { ProgressBarAndroid, StyleSheet, Image, View, TextInput, TouchableOpacity } from 'react-native';
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

export default class FormLogin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleLogin = this.handleLogin.bind(this);

    }

    handleUsername(value) {
        this.setState({ username: value })
    }

    handlePassword(value) {
        this.setState({ password: value })
    }

    handleLogin() {
        this.props.loginProcess(
            this.state.username,
            this.state.password,

        )

        this.props.navigation.navigate("Home")
    }

    render() {
        return (

            <View
                behavior="padding"
                style={styles.Wrapper}>
                <TextInput
                    placeholder='username'
                    underlineColorAndroid='white'
                    placeholderTextColor='white'
                    keyboardType='username'
                    style={styles.inputField} 
                    onChangeText={this.handleUsername}/>
                <TextInput
                    placeholder='password'
                    underlineColorAndroid='white'
                    placeholderTextColor='white'
                    secureTextEntry={true}
                    style={styles.inputField} 
                    onChangeText={this.handlePassword}/>
                <TouchableOpacity onPress={this.handleLogin}>
                    <Text style={{ color: 'white', marginTop: 10 }}>Login</Text>
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
        flex: 1,
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
});
