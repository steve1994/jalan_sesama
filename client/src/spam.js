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
    console.log("DataRES", responseDetail);


    let componentImage = responseDetail.map((items, i) => {
      return <Image source={{ uri: `${API_URL}images/uploaded_image/dana/${items.foto}` }} style={{ width: 320, height: 150, justifyContent: 'center' }} />
    })

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
        <Card style={{ height: 498 }}>
          <Card>
            <CardItem style={{ backgroundColor: '#156cb3' }}>
              {componentImage}
            </CardItem>
            <Text style={{ color: "Black", textAlign: "center", fontWeight: "bold" }}>
              {responseDetail[0].judul}
            </Text>
          </Card>
          <Content style={{ backgroundColor: '#156cb3' }}>
            <View>
              <Item>
                <Label style={{ color: "white", fontWeight: "bold", left: 5 }}>Deskripsi          : </Label>
                <Card style={{ width: "62%" }}>
                  <Text style={{ color: "Black" }}>
                    {responseDetail[0].deskripsi}
                  </Text>
                </Card>
              </Item>
              <Item>
                <Label style={{ color: "white", fontWeight: "bold", left: 5 }}>Nilai Donasi     : </Label>
                <Card style={{ width: "62%" }}>
                  <Text style={{ color: "Black" }}>
                    {responseDetail[0].nominalSet}
                  </Text>
                </Card>
              </Item>
              <Item>
                <Label style={{ color: "white", fontWeight: "bold", left: 5 }}>Hasil Donatur  : </Label>
                <Card style={{ width: "62%" }}>
                  <Text style={{ color: "Black" }}>
                    {responseDetail[0].nominalProcess}
                  </Text>
                </Card>
              </Item>
              <Item>
                <Label style={{ color: "white", fontWeight: "bold", left: 5 }}>Status               : </Label>
                <Card style={{ width: "62%" }}>
                  <Text style={{ color: "Black" }}>
                    {responseDetail[0].status}
                  </Text>
                </Card>
              </Item>
            </View>

            <CardItem style={{ justifyContent: "flex-end" , marginTop:60 }}>
              <Right>
                <Button
                  onPress={() => this.props.navigation.navigate("beriDonasi")} style={{ backgroundColor: '#268026', padding: "5%" }}>
                  <Text style={{ fontSize: 12 }}>Donasi</Text>
                </Button>
              </Right>
            </CardItem>

          </Content>
        </Card>
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