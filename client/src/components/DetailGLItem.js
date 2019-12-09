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

export default class DetailGLItem extends React.Component {

  constructor(props) {
    super(props);
  }




  render() {

    let { foto, judul, deskripsi, nominalSet, nominalProcess, status } = this.props
    console.log("ITEM DATA > ", foto, judul, deskripsi, nominalSet, nominalProcess, status);


    return (

      <Card style={{ height: 498 }}>
        <Card>
          <CardItem style={{ backgroundColor: '#156cb3' }}>
          <Image source={{ uri: `${API_URL}images/uploaded_image/dana/${foto}` }} style={{ width: 320, height: 150, justifyContent: 'center' }} />
          </CardItem>
          <Text style={{ color: "Black", textAlign: "center", fontWeight: "bold" }}>
            {judul}
          </Text>
        </Card>
        <Content style={{ backgroundColor: '#156cb3' }}>
          <View>
            <Item>
              <Label style={{ color: "white", fontWeight: "bold", left: 5 }}>Deskripsi          : </Label>
              <Card style={{ width: "62%" }}>
                <Text style={{ color: "Black" }}>
                  {deskripsi}
                </Text>
              </Card>
            </Item>
            <Item>
              <Label style={{ color: "white", fontWeight: "bold", left: 5 }}>Nilai Donasi     : </Label>
              <Card style={{ width: "62%" }}>
                <Text style={{ color: "Black" }}>
                  {nominalSet}
                </Text>
              </Card>
            </Item>
            <Item>
              <Label style={{ color: "white", fontWeight: "bold", left: 5 }}>Hasil Donatur  : </Label>
              <Card style={{ width: "62%" }}>
                <Text style={{ color: "Black" }}>
                  {nominalProcess}
                </Text>
              </Card>
            </Item>
            <Item>
              <Label style={{ color: "white", fontWeight: "bold", left: 5 }}>Status               : </Label>
              <Card style={{ width: "62%" }}>
                <Text style={{ color: "Black" }}>
                  {status}
                </Text>
              </Card>
            </Item>
          </View>

          <CardItem style={{ justifyContent: "flex-end", marginTop: 60 }}>
            <Right>
              <Button
                onPress={() => this.props.navigation.navigate("beriDonasi")} style={{ backgroundColor: '#268026', padding: "5%" }}>
                <Text style={{ fontSize: 12 }}>Donasi</Text>
              </Button>
            </Right>
          </CardItem>

        </Content>
      </Card>

    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});