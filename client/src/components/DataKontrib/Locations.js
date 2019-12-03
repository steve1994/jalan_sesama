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
  Tabs,
  Tab,
  TabHeading,
  Form,
  Label,
  Input,
  Textarea
} from 'native-base';

export default class Locations extends React.Component {

  constructor(props) {
    super(props)


  }






  render() {

    let { location } = this.props

    return (
      <CardItem style={{ backgroundColor: '#156cb3' }}>
        
        <Row>

          <Image source={{ uri: "https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg" }} style={{ width: 200, height: 272 }} />

        </Row>
        <Item style={{
             left: "63%" 
          }}>
          <Button primary style={{
            bottom:115, padding:5,backgroundColor: '#268026'
          }}>

            <Text>Check</Text>
          </Button>
        </Item>
       

        <Item>
        <Card style={{ width:"61%", left:"30%"}}>
        <View >
        <Text>{location}</Text>
        </View>
        </Card>
        </Item>
        
      </CardItem>
    )


  }
}