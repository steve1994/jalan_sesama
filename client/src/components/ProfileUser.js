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

export default class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  


  render() {
    // let { resProfileSuccess } = this.props
    console.log("Komp", this.props.resProfileSuccess);
    

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

        </Header>
        <Content>
          <Card style={{ height: 230 }}>
            <Text style={{ color: "Black", textAlign: "center", fontWeight: "bold" }}>
              Account
            </Text>
            <CardItem style={{ backgroundColor: '#156cb3' }}>
              <Row>
                <Image source={{ uri: "https://cdn.brilio.net/news/2019/05/29/164868/1041515-pas-foto-seleb-indonesia-ini-kocaknya-keterlaluan-.jpg" }} style={{ width: 120, height: 180, justifyContent: 'center' }} />
                <Card style={{ width: 190, left: 15 }}>
                  <View>
                    <Text style={{ color: "black", textAlign: "left", fontWeight: "bold", }}>
                      Nama : User
            </Text>
                  </View>
                  <View>
                    <Text style={{ color: "black", textAlign: "left", fontWeight: "bold" }}>
                      Alamat  : User
            </Text>
                  </View>

                  <Text style={{ color: "black", textAlign: "left", fontWeight: "bold", }}>
                    Tanggal Lahir : User
            </Text>
                </Card>

              </Row>
            </CardItem>

          </Card>
          <Card>
            <View>
              <Button
                style={{
                  textAlign: 'center',
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: 5
                }}
                success>
                <Text style={{ color: "black", textAlign: "left", fontWeight: "bold", }}>
                  List Donasi
            </Text>
              </Button>
            </View>

            <View>
              <Button
                style={{
                  textAlign: 'center',
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: 5
                }}
                danger>
                <Text style={{ color: "black", textAlign: "left", fontWeight: "bold" }}>
                  Hapus Akun
            </Text>
              </Button>
            </View>

            <View>
              <Button
                style={{
                  textAlign: 'center',
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: 5
                }}
                warning onPress={() => this.props.navigation.navigate("Home")}>
                <Text style={{ color: "black", textAlign: "left", fontWeight: "bold" }}>
                  Logout
            </Text>
              </Button>
            </View>

            <Row style={{ margin: 16 }}>
              <Left>
                <Button
                  style={{
                    textAlign: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: 5
                  }}
                  danger onPress={() => this.props.navigation.navigate("HomeUser")}>
                  <Text style={{ color: "white", textAlign: "left", fontWeight: "bold" }}>
                    Back
            </Text>
                </Button>
              </Left>

              <Right>
                <Button
                  style={{
                    textAlign: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: 5,
                  }}
                  primary>
                  <Text style={{ color: "white", textAlign: "left", fontWeight: "bold" }}>
                    Chat Admin
            </Text>
                </Button>
              </Right>

            </Row>

          </Card>

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