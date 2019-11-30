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

            <Right>
              <Row>
                <CardItem style={{ justifyContent: "flex-end" }}>
                  <Button transparent light
                    onPress={() => this.props.navigation.navigate("ListPanti")}>
                    <Image source={{ uri: "https://i0.wp.com/www.rumahsinggahpeduli.org/wp-content/uploads/2016/12/Rumah-Singgah-Icon.jpg?fit=201%2C205&ssl=1" }} style={{ width: 70, height: 70 }} />
                  </Button>
                </CardItem>
                <CardItem style={{ justifyContent: "flex-end" }}>
                  <Button transparent light
                    onPress={() => this.props.navigation.navigate("GLdana")}>
                    <Image source={{ uri: "https://infaqberkah.id/wp-content/uploads/2018/10/Kencleng-Berkah-Icon-e1539674712818.png" }} style={{ width: 70, height: 70 }} />
                  </Button>
                </CardItem>
                <CardItem style={{ justifyContent: "flex-end" }}>
                  <Button transparent light
                    onPress={() => this.props.navigation.navigate("LoginRegis")}>
                    <Image source={{ uri: "https://cdn1.iconfinder.com/data/icons/elevator/154/elevator-user-man-ui-round-login-512.png" }} style={{ width: 70, height: 70 }} />
                  </Button>
                </CardItem>
              </Row>
            </Right>

          </Card>
          <List dataArray={items}
            Vertical
            renderRow={(item) =>
              <ListItem >
                <Card style={{ width: 310 }}>
                  <CardItem style={{}}>
                    <Text> {item} </Text>
                  </CardItem>
                  <CardItem cardBody>
                    <Image source={{ uri: "http://www.infobdg.com/v2/wp-content/uploads/2019/05/Anak-Anak-Panti-Asuhan.jpg" }} style={{ width: 309, height: 200 }} />
                  </CardItem>

                  <View style={styles.container}>
                    <ProgressBarAndroid />
                    <Row>
                      <Text style={{ fontSize: 12, left: 5 }}>Rp.650.000</Text>
                      <Right>
                        <Text style={{ fontSize: 12, right: 5 }}>Rp.1.000.000</Text>
                      </Right>
                    </Row>
                    <ProgressBarAndroid
                      styleAttr="Horizontal"
                      indeterminate={false}
                      progress={0.8}
                    />


                    <CardItem style={{ justifyContent: "flex-end" }}>
                      <Right>
                        <Row>
                          <Button
                            onPress={() => this.props.navigation.navigate("DetailGL")} style={{ backgroundColor: '#268026', padding:"5%" }}>
                            <Text style={{ fontSize: 12 }}>Detail</Text>
                          </Button>
                        </Row>
                      </Right>
                    </CardItem>



                  </View>
                </Card>
              </ListItem>
            }>
          </List>
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