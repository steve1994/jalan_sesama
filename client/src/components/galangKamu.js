import React from 'react';
import { StyleSheet ,Image, View, ScrollView } from 'react-native';
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

import ListGalang from '../container/galangKamu/ListGalang';


export default class galangKamu extends React.Component {

  constructor(props) {
    super(props);
  }

  




  render() {

    let { galangKamu } = this.props;

    // console.log('props', galangKamu);

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
          <Card style={{ backgroundColor: '#156cb3', height: 490 }}>
            <Card style={{ height: 480 }}>
              <Card style={{ backgroundColor: '#156cb3' }}>
                <Text style={{ color: "white", textAlign: "center", fontWeight: "bold", margin: 20 }}>
                  Daftar Kontribusi Kamu Disini
                </Text>
              </Card>
              <ScrollView>
                  {galangKamu.map((items, i) => {
                    return (
                      <ListGalang
                        navigation={this.props.navigation}
                        {...items}
                      />

                    )



                  })}
              </ScrollView>
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
