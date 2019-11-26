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

export default class ListPanti extends React.Component {

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
          <Left style={{ right: 12 }}>
            <Button iconLeft light
              onPress={() => this.props.navigation.navigate("Home")} >
              <Icon name='arrow-back' />
              <Text>Back</Text>
            </Button>
          </Left>
        </Header>
        <Content>
          <Card style={{ backgroundColor: '#156cb3'}}>
            <Card style={{ height: 480 }}>
              <Card style={{  backgroundColor: '#156cb3' }}>
              <Text style={{ color: "white", textAlign: "center", fontWeight: "bold", margin: 20 }}>
                Data Panti Indonesia
            </Text>
            </Card>
              <List dataArray={items}
                Vertical
                renderRow={(item) =>
                  <ListItem >
                    <Card style={{ width: 320 }}>
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
            </Card>
          </Card>
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
