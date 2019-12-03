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
    List,
    Tabs,
    Tab,
    TabHeading,
    Form,
    Label,
    Input,
    Textarea
  } from 'native-base';

export default class About extends React.Component {

    constructor(props) {
        super(props)


    }






    render() {
        const { nama, alamat, jumlahOrang, deskripsi } = this.props
        


        return (
            <View>
                <Form>
                    <Item>
                        <Label style={{ color: "white", margin: 9 }}>Nama</Label>
                        <View cardBody style={{ width: 270 }}>
                            <Text style={{ fontSize: 15, color: "black" }}>
                                {nama}
                    </Text>
                        </View>
                    </Item>
                </Form>
                <Form>
                    <Item>
                        <Label style={{ color: "white", margin: 9 }}>Alamat</Label>
                        <View cardBody style={{ width: 270 }}>
                            <Text style={{ fontSize: 15, color: "black" }}>
                                {alamat}
          </Text>
                        </View>
                    </Item>
                </Form>
                <Form>
                    <Item>
                        <Label style={{ color: "white", margin: 9 }}>Jumlah Penghuni</Label>
                        <View cardBody style={{ width: 270 }}>
                            <Text style={{ fontSize: 15, color: "black" }}>
                                {jumlahOrang} Orang
          </Text>
                        </View>
                    </Item>
                </Form>
                <Form>
                    <Item>
                        <Label style={{ color: "white", margin: 9 }}>Deskripsi</Label>
                        <View cardBody style={{ width: 270 }}>
                            <Text style={{ fontSize: 15, color: "black" }}>
                                {deskripsi}
          </Text>
                        </View>
                    </Item>
                </Form>

            </View>
        )


    }
}