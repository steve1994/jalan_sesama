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

export default class galangKamu extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {

    const items = ['Daniel Michael Blake Day-Lewis', 'Kiefer William Frederick Dempsey George Rufus Sutherland', 'Isabella Fiorella Elettra Giovanna Rossellini', 'Charles Philip Arthur George Mountbatten-Windsor', 'Johannes Chrysostomus Wolfgangus Theophilus Mozart'];

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
              onPress={() => this.props.navigation.navigate("GLdana")} >
              <Icon name='arrow-back' />
              <Text>Back</Text>
            </Button>
          </Left>
        </Header>
        <Content>
          <Card style={{ backgroundColor: '#156cb3' }}>
            <Card style={{ height: 480 }}>
              <Card style={{ backgroundColor: '#156cb3' }}>
                <Text style={{ color: "white", textAlign: "center", fontWeight: "bold", margin: 20 }}>
                  Daftar Kontribusi Kamu Disini
            </Text>
              </Card>

              <List>
                <ListItem selected>
                  <Left>
                    <Text>Panti Asuhan Cinangka Cihideng</Text>
                  </Left>


                  <Row style={{ padding: 5, left: 43 }}>
                    <Text style={{ fontSize: 12 }}>Status:</Text>
                    <Text style={{ fontSize: 12 }}> Verify</Text>
                  </Row>


                  <Button transparent style={{ width:50,height:30, left: 20 }} onPress={() => this.props.navigation.navigate("DTKontrib")}>
                    <Icon name='arrow-forward' />
                  </Button>
                </ListItem>
                <ListItem>
                  <Left>
                    <Text>Bantu Rumah Rusak</Text>
                  </Left>
                  <Right>
                    <Row>
                      <Text style={{ fontSize: 12 }}>Status:</Text>
                      <Text style={{ fontSize: 12 }}> Check</Text>
                    </Row>
                  </Right>
                  <Right>
                    <Icon name="arrow-forward" />
                  </Right>
                </ListItem>
                <ListItem>
                  <Left>
                    <Text>Bantu Mamah Loren</Text>
                  </Left>
                  <Right>
                    <Row>
                      <Text style={{ fontSize: 12 }}>Status:</Text>
                      <Text style={{ fontSize: 12 }}> Check</Text>
                    </Row>
                  </Right>
                  <Right>
                    <Icon name="arrow-forward" />
                  </Right>
                </ListItem>
              </List>

            </Card>
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
