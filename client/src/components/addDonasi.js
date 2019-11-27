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
  Form,
  Label,
  Input,
  Textarea
} from 'native-base';




export default class addPanti extends React.Component {

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
              onPress={() => this.props.navigation.navigate("DTKontrib")} >
              <Icon name='arrow-back' />
              <Text>Back</Text>
            </Button>
          </Left>
        </Header>
        <Content>
          <Card style={{ backgroundColor: '#156cb3' }}>
            <Card>
              <Card style={{ backgroundColor: '#156cb3' }}>
                <Text style={{ color: "white", textAlign: "center", fontWeight: "bold", margin: 20 }}>
                  Tambahkan Data Penggalang Baru
                  </Text>
              </Card>

              <Card>
                <Form>
                  <Item floatingLabel>
                    <Label>Judul Penggalangan</Label>
                    <Input />
                  </Item>
                  <Item floatingLabel>
                    <Label>Deskripsi</Label>
                    <Input />
                  </Item>
                  <Item floatingLabel>
                    <Label>Foto</Label>
                    <Input />
                  </Item>

                </Form>

                <Row>
                  <Button primary style={{
                    padding: '10%', margin: 20, left: 86
                  }}>
                    <Text>Save</Text>
                  </Button>
                </Row>

              </Card>
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