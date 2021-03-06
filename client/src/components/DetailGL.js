import React from 'react';
import { ProgressBarAndroid, StyleSheet, Image, View } from 'react-native';
import { API_URL } from '../helpers/accessImage';
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
import DetailGLItem from '../container/galangKamu/DetailGLItem'

export default class DetailGL extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

    let { detailKontrib } = this.props
    console.log("DataRES kontib", detailKontrib);

    // let { detailKontrib } = this.props


    // const dataPenggalangan = detailKontrib.map(item => {
    //   let idUsing = item._id
    //   let type = item.type
    //   return { idUsing, type }
    // })


    // this.props.loadDataPenggalang(
    //   dataPenggalangan
    // )
  }




  render() {

    let { responseDetail } = this.props

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
        {responseDetail.map((item, i) => {
          return(

            <DetailGLItem 
            navigation={this.props.navigation}
            {...item}
            />

          )
        })}
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