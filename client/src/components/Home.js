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

export default class Home extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {

    const items = ['Daniel Michael Blake Day-Lewis', 'Kiefer William Frederick Dempsey George Rufus Sutherland', 'Isabella Fiorella Elettra Giovanna Rossellini', 'Charles Philip Arthur George Mountbatten-Windsor', 'Johannes Chrysostomus Wolfgangus Theophilus Mozart'];

    return (
      <Container>
        <Header style={{ backgroundColor: '#469189' }}>

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
            <CardItem style={{ backgroundColor: '#156cb3' }}>
              <Image source={{ uri: "https://vignette.wikia.nocookie.net/muppet/images/9/96/JalanSesamaLogo.jpg/revision/latest/scale-to-width-down/300?cb=20100802202901" }} style={{ width: 320, height: 180, justifyContent: 'center' }} />
            </CardItem>
            <Text style={{ color: "Black", textAlign: "center", fontWeight: "bold" }}>
              Membantu Sesama Kita
            </Text>
          </Card>
          <Card>
            <Row>
              <CardItem style={{ borderEndColor: "black" }}>
                <View>
                  <Button transparent light onPress={() => this.props.navigation.navigate("ListPanti")}>
                  <Image source={{ uri: "https://i0.wp.com/www.rumahsinggahpeduli.org/wp-content/uploads/2016/12/Rumah-Singgah-Icon.jpg?fit=201%2C205&ssl=1" }} style={{ width: 70, height: 70, left: 20 }} />
                  </Button>
                </View>
                <View>
                <Button transparent light onPress={() => this.props.navigation.navigate("GLdana")} style={{ width: 70, height: 70, left: 60 }}>
                <Image source={{ uri: "https://infaqberkah.id/wp-content/uploads/2018/10/Kencleng-Berkah-Icon-e1539674712818.png" }} style={{ width: 70, height: 70 }} />
                  </Button>
                {/* <Button transparent light onPress={() => this.props.navigation.navigate("ListPanti")}>
                <Image source={{ uri: "https://infaqberkah.id/wp-content/uploads/2018/10/Kencleng-Berkah-Icon-e1539674712818.png" }} style={{ width: 70, height: 70, left: 60 }} />
                </Button> */}
                </View>
                <View>
                  <Image source={{ uri: "https://cdn1.iconfinder.com/data/icons/elevator/154/elevator-user-man-ui-round-login-512.png" }} style={{ width: 70, height: 70, left: 100 }} />
                </View>
              </CardItem>

            </Row>
          </Card>
          <List dataArray={items}
            Vertical
            renderRow={(item) =>
              <ListItem>
                <Card>
                  <CardItem cardBody>
                    <Image source={{ uri: "https://mudanews.com/wp-content/uploads/2019/04/Jalinan-Kasih-Bantu-Kaum-Perempuan.jpg" }} style={{ width: 320, height: 300 }} resizeMode="contain" />
                  </CardItem>
                  <CardItem style={{ width: 200 }}>
                    <Text numberOfLines={1}>{item}</Text>
                  </CardItem>
                  <CardItem style={{ width: 200 }}>
                    <Text> Rate </Text>
                  </CardItem>
                  <CardItem style={{ width: 200 }}>
                    <Text> Description </Text>
                  </CardItem>
                  <CardItem style={{ width: 200 }}>
                    <Text> Price: Rp.12.500 </Text>
                  </CardItem>
                  <Button full rounded
                    onPress={() => this.props.navigation.navigate("Detail")}>
                    <Text style={{ justifyContent: "flex-start" }}>Detail</Text>
                  </Button>
                </Card>
              </ListItem>
            }>
          </List>
        </Content>
        <Footer>
          <FooterTab style={{ backgroundColor: '#469189' }}>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
