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

export default class GLdana extends React.Component {

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
              onPress={() => this.props.navigation.navigate("Home")} >
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
                  Penggalangan Dana
            </Text>
              </Card>
              <Row>
              <CardItem cardBody style={{ margin: 10 }}>
              <Button transparent light onPress={() => this.props.navigation.navigate("addPanti")} style={{ }}>
                <Image source={{ uri: "http://pantiyatim.or.id/wp-content/uploads/2018/03/Untitled-2.png" }} style={{ width: 160, height: 110 }} />
              </Button>
              </CardItem>
              <View cardBody style={{ margin: 5, width: 190, height: 50, padding: 15 }}>
                <Text style={{ fontSize: 15 }}>
                  Fitur ini kamu dapat menjadi pengelola panti sekaligus kamu dapat menggalang dana
                </Text>
              </View>
              </Row>

              <Row>
              <CardItem cardBody style={{ margin: 10 }} >
                <Button transparent light onPress={() => this.props.navigation.navigate("addSesama")} style={{ }}>
                <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS-DyjoTf6-bdJ4hyaD-ZgcwHKshScLnZWBHRmBil1kge5pPTkE" }} style={{ width: 160, height: 110 }} />
                </Button>
              </CardItem>
              <View cardBody style={{ margin: 5, width: 190, height: 50, padding: 15 }}>
                <Text style={{ fontSize: 15 }}>
                  Fitur ini kamu dapat menggalang dana untuk membantu sesama
                </Text>
              </View>
              </Row>

              <Row>
              <CardItem cardBody style={{ margin: 10 }}>
                <Button transparent light onPress={() => this.props.navigation.navigate("galangKamu")} style={{ }}>
                <Image source={{ uri: "https://lh3.googleusercontent.com/GVcvDxX3cUWQtMHOM5wgPpxPsVqSAcGNZeRLJ5J14AGGi7R1eKU8lRqJfF9nmCAYM5K8lg=s136" }} style={{ width: 165, height: 120 }} />
                </Button>
              </CardItem>
              <View cardBody style={{ margin: 1, width: 160, height: 50, padding: 14 }}>
                <Text style={{ fontSize: 15 }}>
                  Kamu dapat melihat semua penggalangan yang sudah kamu buat disini
                </Text>
              </View>
              </Row>

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
