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
        
        this.showDetail = this.showDetail.bind(this);
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




render() {
    const { nama, status } = this.props
    

    return (
        // <List>
        <ListItem selected>
            <Left>
                <Text>{nama}</Text>
            </Left>


            <Row style={{ padding: 5, left: 43 }}>
                <Text style={{ fontSize: 12 }}>Status  :  </Text>
                <Text style={{ fontSize: 12 }}>{status}</Text>
            </Row>


            <Button transparent style={{ width: 50, height: 30, left: 20 }} onPress={this.showDetail}>
                <Icon name='arrow-forward' />
            </Button>
        </ListItem>
        // </List>
    )


}
}