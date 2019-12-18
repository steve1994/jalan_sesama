import React from 'react';
import { ProgressBarAndroid, StyleSheet, Image, View } from 'react-native';
import { API_URL } from '../helpers/accessImage';
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

export default class Done extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nominal: ''
        }
     
        this.putDataNominal = this.putDataNominal.bind(this);
    }

   


    putDataNominal() {
        let { responseDetail } = this.props
        let idGalangDana = responseDetail[0]._id
        let nominal = responseDetail[0].nominalSet - responseDetail[0].nominalProcess


        this.props.putNominal(
            idGalangDana,
            nominal
        )

        const dataPenggalangan = responseDetail.map(item => {
            if (item.type == "panti") {

                let idUsing = item.idPanti
                let type = item.type
                return { idUsing, type }

            } else {
                let idUsing = item.idBantu
                let type = item.type
                return { idUsing, type }
            }

        })

        this.props.loadDataPenggalang(
            dataPenggalangan,
            this.props.navigation.navigate("DTKontrib")
        )
    }


    render() {

        let { responseDetail } = this.props

        let componentImage = responseDetail.map((items, i) => {
            return <Image source={{ uri: `${API_URL}images/uploaded_image/dana/${items.foto}` }} style={{ width: 320, height: 150, justifyContent: 'center' }} />
        })

        return (
            <Container>
                <Header style={{ backgroundColor: '#268026' }}>

                    <Body>
                        <Text style={{ color: "white" }}>
                            Senin, 25 November 2019
            </Text>
                        <Text>
                            <Title style={{ width: 130 }}>Jalan Sesama</Title>
                        </Text>
                    </Body>
                    <Left style={{ right: 12 }}>
                        <Button iconLeft light
                            onPress={() => this.props.navigation.navigate("DTKontrib")} >
                            <Icon name='arrow-back' />
                            <Text>Back</Text>
                        </Button>
                    </Left>
                </Header>
                <Content style={{ backgroundColor: '#156cb3' }}>
                    {responseDetail.map((item) => {
                        return (
                            < View >
                                <Card style={{ height: 215 }}>
                                    <CardItem style={{ backgroundColor: '#156cb3' }}>
                                        {componentImage}
                                    </CardItem>
                                    <Text style={{ color: "Black", textAlign: "center", fontWeight: "bold" }}>
                                        {item.judul}
                                    </Text>
                                    <Text style={{ color: "Black", backgroundColor: "cyan", textAlign: "center", fontWeight: "bold" }}>
                                        Berikan Bantuan Berupa Donasi
                         </Text>
                                </Card>
                                <View>
                                    <Item>
                                        <Label style={{ color: "white", fontWeight: "bold", left: 5 }}>Nilai Max                   : </Label>
                                        <Card style={{ width: "52%" }}>
                                            <Text style={{ color: "Black" }}>
                                                {item.nominalSet}

                                            </Text>
                                        </Card>
                                    </Item>
                                    <Item>
                                        <Label style={{ color: "white", fontWeight: "bold", left: 5 }}>Donasi Saat ini         : </Label>
                                        <Card style={{ width: "52%" }}>
                                            <Text style={{ color: "Black" }}>
                                                {item.nominalProcess}

                                            </Text>
                                        </Card>
                                    </Item>
                                    <Item>
                                        <Label style={{ color: "white", fontWeight: "bold", left: 5 }}>Selesaikan Donasi  : </Label>
                                        <Card style={{ width: "52%" }}>
                                            <Input placeholder={`${item.nominalSet - item.nominalProcess}`} style={{ color: "Black" }} disabled/>
                                        </Card>
                                    </Item>
                                </View>

                                <CardItem style={{ justifyContent: "flex-end" }}>
                                    <Right>
                                        <Row>
                                            <Button
                                                onPress={this.putDataNominal} style={{ backgroundColor: '#268026', padding: "5%" }}>
                                                <Text style={{ fontSize: 12 }}>Donasi</Text>
                                            </Button>
                                        </Row>
                                    </Right>
                                </CardItem>
                            </View>
                        )
                    })}



                </Content>

                <Footer>
                    <FooterTab style={{ backgroundColor: '#268026' }}>
                        <Button full>
                            <Text>Footer</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container >
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});