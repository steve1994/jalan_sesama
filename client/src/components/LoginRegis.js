import React from 'react';
import { ProgressBarAndroid, StyleSheet, Image, View, TextInput, TouchableOpacity } from 'react-native';
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

import FormLogin from './LoginReg/FormLogin';
import FormRegis from './LoginReg/FormRegis';


export default class DTKontrib extends React.Component {

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
          <Left style={{ right: 12 }}>
            <Button iconLeft light
              onPress={() => this.props.navigation.navigate("Home")} >
              <Icon name='arrow-back' />
              <Text>Back</Text>
            </Button>
          </Left>
        </Header>

        <Content style={{ backgroundColor: '#156cb3' }}>
          <Tabs>
            <Tab heading={<TabHeading><Icon name="" /><Text>Login</Text></TabHeading>} style={{ backgroundColor: '#156cb3' }}>

              <FormLogin />
              
            </Tab>

            <Tab heading={<TabHeading><Text>Register</Text></TabHeading>}>

              <FormRegis />

            </Tab>

          </Tabs>
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
  inputField: {
    width: 280,
    color: 'white',
    borderColor: 'white',
    marginTop: 5
  },
  Wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1F3A93',
    height: 490
  },
  text: {
    color: 'blue',
    fontSize: 23
  },

  container: {
    flex: 1,
  },
});