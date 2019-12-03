import React from 'react';
import { Image, View , TouchableOpacity} from 'react-native';
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

function ListGalang2(props) {
    let {
        _id,
        nama,
        status
    } = props

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

                <TouchableOpacity>
                    <Button transparent style={{ width: 50, height: 30, left: 20 }} onPress={() => props.navigation.navigate("DTKontrib")}>
                        <Icon name='arrow-forward' />
                    </Button>
                </TouchableOpacity>

            </ListItem>
        </List>

    )
}
export default ListGalang2