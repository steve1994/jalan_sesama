import React from 'react';
import { API_URL } from '../../../../helpers/accessImage';
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

import About from '../../../../container/HomeUmum/DetailGLProfile/KontribProfile/About';
import Locations from '../../../../container/HomeUmum/DetailGLProfile/KontribProfile/Locations';
import Donations from '../../../../container/HomeUmum/DetailGLProfile/KontribProfile/Donations';

export default class KontribProfile extends React.Component {

  constructor(props) {
    super(props);
    this.backListPanti = this.backListPanti.bind(this)
  }

  backListPanti() {
    this.props.loadAllPanti()
    this.props.navigation.navigate("galangKamuProfile")
  }






  render() {


    let { detailKontrib, showDetail } = this.props

    console.log("KOMP TEST> ", detailKontrib);

    let componentImage = detailKontrib.map((items, i) => {
      if (items.type == "panti") {
        return <Image source={{ uri: `${API_URL}images/uploaded_image/panti/${items.foto}` }} style={{ width: 320, height: 130, justifyContent: 'center' }} />
      } else {
        return <Image source={{ uri: `${API_URL}images/uploaded_image/sesama/${items.foto}` }} style={{ width: 320, height: 130, justifyContent: 'center' }} />
      }
    })



    return (
      <Container>
        <Header style={{ backgroundColor: '#268026' }}>

          <Body>
            <Text style={{ color: "white" }}>
              Senin, 25 November 2019
            </Text>
            <Text>
              <Title style={{ width: 130 }}>Kontrib Sesama</Title>
            </Text>
          </Body>
          <Left style={{ right: 12 }}>

          <Button iconLeft light
              onPress={() => { detailKontrib.map(items => showDetail(items.idUser), this.props.navigation.navigate("galangKamuProfile")) }} >
              <Icon name='arrow-back' />
              <Text>Back</Text>
            </Button>

          </Left>
        </Header>
        <Card style={{ height: 179 }}>
          <CardItem style={{ backgroundColor: '#156cb3' }}>

            {componentImage}
          </CardItem>

          <Text style={{ color: "Black", textAlign: "center", fontWeight: "bold" }}>
            {detailKontrib.map(items => (items.judul))}
          </Text>
        </Card>
        <Tabs>
          <Tab heading={<TabHeading><Icon name="" /><Text>About</Text></TabHeading>} style={{ backgroundColor: '#156cb3' }}>

            {detailKontrib.map((items, i) => {

              return (
                <About
                  {...items}
                />
              )

            })}

          </Tab>

          <Tab heading={<TabHeading><Text>Locations</Text></TabHeading>}>

            {detailKontrib.map((items, i) => {

              return (
                <Locations
                  {...items}
                />
              )

            })}

          </Tab>

          <Tab heading={<TabHeading><Icon name="" /><Text>Donations</Text></TabHeading>}>


            <Donations
              navigation={this.props.navigation}
            />


          </Tab>

        </Tabs>
        {/* <Footer>
          <FooterTab style={{ backgroundColor: '#268026' }}>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer> */}
      </Container>
    );
  }

}

