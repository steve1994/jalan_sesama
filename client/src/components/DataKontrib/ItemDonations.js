import React from 'react';
import { ProgressBarAndroid, StyleSheet, Image, View, TouchableOpacity } from 'react-native';
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

export default class ItemDonations extends React.Component {

    constructor(props) {
        super(props)

    }

    render() {
        let { showDetail, judul, status, nominalSet, nominalProcess, _id, type } = this.props

        return (

            <ListItem >
                <Card style={{ width: 310 }}>
                    <Card>
                        <Row>
                            <CardItem style={{ width: "65%" }}>
                                <Text>{judul}</Text>
                            </CardItem>
                            <CardItem style={{ right: 20 }}>
                                <Text> Status : </Text>
                            </CardItem>
                        </Row>
                    </Card>
                    {nominalProcess >= nominalSet ?
                        <Right>
                            <Text style={{ left: 90 }}> Complete </Text>
                        </Right>
                        :
                        <Right>
                            <Text style={{ left: 90 }}> {status} </Text>
                        </Right>

                    }
                    <View style={styles.container}>
                        <ProgressBarAndroid />
                        <Row>
                            <Text style={{ fontSize: 12, left: 5 }}>Rp. {nominalProcess}</Text>
                            <Right>
                                <Text style={{ fontSize: 12, right: 5 }}>Rp. {nominalSet}</Text>
                            </Right>
                        </Row>

                        <ProgressBarAndroid
                            styleAttr="Horizontal"
                            indeterminate={false}
                            progress={nominalProcess / nominalSet}
                        />



                        <CardItem style={{ justifyContent: "flex-end" }}>
                            <Right>
                                <Row>
                                   
                                    <Button
                                        onPress={() => { this.props.navigation.navigate("DetailGL"); { showDetail(_id, type) } }}
                                        style={{ backgroundColor: '#2b37c2', right: 140 }}>
                                        <Text style={{ fontSize: 12 }}>Detail</Text>
                                    </Button>

                                    <Button
                                        onPress={() => { this.props.navigation.navigate("Done"); { showDetail(_id, type) } }}
                                        style={{ backgroundColor: '#268026' }}>
                                        <Text style={{ fontSize: 12 }}>Done</Text>
                                    </Button>
                                </Row>
                            </Right>
                        </CardItem>


                    </View>
                </Card>
            </ListItem>

        )


    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});