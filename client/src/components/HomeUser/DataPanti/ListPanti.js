import React from 'react';
import { Image, View, ScrollView } from 'react-native';
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
  Thumbnail
} from 'native-base';
import ListItemPanti from '../../../container/HomeUmum/DataPanti/ListItemPanti';


export default class ListPanti extends React.Component {

  constructor(props) {
    super(props);
    this.handleBack = this.handleBack.bind(this);
  }

  componentDidMount() {

    this.props.loadAllPanti()
  }

  handleBack() {
    this.props.loadAllDonations(
      this.props.navigation.navigate("Home")
    )
  }


  render() {

    let { responseAllPanti } = this.props





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
              onPress={this.handleBack} >
              <Icon name='arrow-back' />
              <Text>Back</Text>
            </Button>
          </Left>
        </Header>
        <Content>
          <Card style={{ backgroundColor: '#156cb3', height: 550 }}>
            <Card style={{ height: 545 }}>
              <Card style={{ backgroundColor: '#156cb3' }}>
                <Text style={{ color: "white", textAlign: "center", fontWeight: "bold", margin: 20 }}>
                  Data Panti Indonesia
            </Text>
              </Card>
              <ScrollView style={{ backgroundColor: '#156cb3' }}>
                {responseAllPanti.map((items, i) => {
                  return (

                    <ListItemPanti
                      navigation={this.props.navigation}
                      {...items}
                    />

                  )

                })}
              </ScrollView>
            </Card>
          </Card>
        </Content>
      </Container>
    );
  }

}
