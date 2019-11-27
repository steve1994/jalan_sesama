import React from 'react';
import { ProgressBarAndroid, StyleSheet, Image, View } from 'react-native';
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

export default class DTKontrib extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {

    const items = ['Perbaikan atap bocor', 'Membeli perlengkapan lansia', 'Anak kecil sakit', 'Perlu kursi roda', 'Bawa kakek rusman belanja'];

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

        <Card style={{ height: 195 }}>
          <CardItem style={{ backgroundColor: '#156cb3' }}>
            <Image source={{ uri: "https://cdns.klimg.com/merdeka.com/i/w/news/2016/05/13/706401/670x335/angin-puting-beliung-di-jembrana-rusak-3-atap-rumah.jpeg" }} style={{ width: 320, height: 150, justifyContent: 'center' }} />
          </CardItem>
          <Text style={{ color: "Black", textAlign: "center", fontWeight: "bold" }}>
            TITLE : Nama Panti Asuhan / Bantu Sesama
            </Text>
        </Card>
        <Content style={{ backgroundColor: '#156cb3' }}>
          <View>
            <Item>
              <Label style={{ color: "white", fontWeight: "bold", left: 5 }}>Deskripsi          : </Label>
              <Card style={{ width: "62%" }}>
                <Text style={{ color: "Black" }}>
                  Kerusakan parah akibat hujan lebat merusak atap panti asuhan jingga
            </Text>
              </Card>
            </Item>
            <Item>
              <Label style={{ color: "white", fontWeight: "bold", left: 5 }}>Nilai Donasi     : </Label>
              <Card style={{ width: "62%" }}>
                <Text style={{ color: "Black" }}>
                  Rp.1.000.000
            </Text>
              </Card>
            </Item>
            <Item>
              <Label style={{ color: "white", fontWeight: "bold", left: 5 }}>Hasil Donatur  : </Label>
              <Card style={{ width: "62%" }}>
                <Text style={{ color: "Black" }}>
                  Rp.650.000
            </Text>
              </Card>
            </Item>
          </View>

        </Content>

        <Footer>
          <FooterTab style={{ backgroundColor: '#268026' }}>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});