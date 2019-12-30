import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
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

export default class ChatMessage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            messages: [],

        }
        this.handleBack = this.handleBack.bind(this)

    }

    componentDidMount() {
        let { resProfileSuccess } = this.props
        let idUser = resProfileSuccess[0]._id;
        let userName = resProfileSuccess[0].username;
        this.props.postChats(
            idUser,
            userName
        )

        this.setState({
            messages: [
                {
                    _id: 1,
                    text: 'Hello developer',
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: 'React Native',
                        avatar: 'https://placeimg.com/140/140/any',
                    },
                },
            ],
        })
    }

    onSend(messages = []) {
        let { resProfileSuccess } = this.props
        let idUser = resProfileSuccess[0]._id;
        let userName = resProfileSuccess[0].username;
        let message = messages[0].text;
        this.props.postChats(
            idUser,
            userName,
            message
        )

        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages),
        }))

    }

    handleBack() {
        let { resProfileSuccess } = this.props
        let idUser = resProfileSuccess[0]._id;
        this.props.deleteChat(
            idUser
        )        

        this.props.navigation.navigate("ProfileUser")
    }

    render() {


        return (
            <Container>
                <Header style={{ backgroundColor: '#268026' }}>

                    <Body>
                        <Text style={{ color: "white" }}>
                            Senin Desember
                         </Text>
                        <Text>
                            <Title style={{ width: 130 }}>Jalan Sesama</Title>
                        </Text>
                    </Body>
                    <Left style={{ right: 12 }}>
                        <Button iconLeft light
                            onPress={this.handleBack} >
                            <Icon name='arrow-back' />
                            <Text>Back</Text>
                        </Button>
                    </Left>
                </Header>


                <GiftedChat
                    messages={this.state.messages}
                    onSend={messages => this.onSend(messages)}
                    user={{
                        _id: 1,
                    }}
                />



            </Container>



        )
    }
}