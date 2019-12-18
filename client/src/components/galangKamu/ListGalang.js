import React from 'react';
import { Image, View, Alert } from 'react-native';
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
    List
} from 'native-base';

export default class ListGalang extends React.Component {

    constructor(props) {
        super(props)

        this.showDetail = this.showDetail.bind(this);
        this.showAlert = this.showAlert.bind(this);
        this.deleteAlert = this.deleteAlert.bind(this);

    }

    showDetail() {
        const { _id, type } = this.props
        let idUsing = _id
        this.props.dataLoad(
            idUsing,
            type,

            this.props.navigation.navigate("DTKontrib")
        )
    }

    showAlert = () => {
        Alert.alert(
            'Sory status pending!! waiting confirm from Admin'
        )
    }

    deleteAlert = () => {
        Alert.alert(
            'Sory status rejected!! you can wait for delete'
        )
        const { _id, idUser, type, } = this.props
        
        
        this.props.deleteReject(
            _id, type
        )

        this.props.showDetail(
            idUser,
            this.props.navigation.navigate("galangKamu")
        )
    }


    render() {
        const { nama, status } = this.props

        return (
            // <List>
            <ListItem selected>
                <Left>
                    <Text>{nama}</Text>
                </Left>


                <Row style={{ padding: 5, left: 43 }}>
                    <Text style={{ fontSize: 12 }}>Status :  </Text>
                    <Text style={{ fontSize: 12 }}>{status}</Text>
                </Row>

                {status == "pending" ?
                    <Button transparent style={{ width: 50, height: 30, left: 20, border: "6px solid red" }} onPress={this.showAlert}>
                        <Icon name='info' />
                    </Button>
                    :
                    status == "rejected" ?
                        <Button transparent style={{ width: 50, height: 30, left: 20, border: "6px solid red" }} onPress={this.deleteAlert}>
                            <Icon name='close' />
                        </Button>
                        :
                        <Button transparent style={{ width: 50, height: 30, left: 20, border: "6px solid red" }} onPress={this.showDetail}>
                            <Icon name='arrow-forward' />
                        </Button>

                }
            </ListItem>
            // </List>
        )


    }
}