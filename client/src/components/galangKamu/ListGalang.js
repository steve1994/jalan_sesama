import React from 'react';
import { Image, View } from 'react-native';
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
        this.state = {
            idPanti: props.idPanti,
            nama: props.nama,
            status: props.status
        }
    }



    render() {
        const { idPanti , nama, status } = this.props
        console.log("listGalang KOMP >", idPanti);
        
        return (
            <List>
                <ListItem selected>
                    <Left>
                        <Text>{nama}</Text>
                    </Left>


                    <Row style={{ padding: 5, left: 43 }}>
                        <Text style={{ fontSize: 12 }}>Status  :  </Text>
                        <Text style={{ fontSize: 12 }}>{status}</Text>
                    </Row>


                    <Button transparent style={{ width: 50, height: 30, left: 20 }} onPress={() => props.navigation.navigate("DTKontrib")}>
                        <Icon name='arrow-forward' />
                    </Button>
                </ListItem>
            </List>
        )


    }
}