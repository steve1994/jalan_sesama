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
import { connect } from "react-redux";
import { loadGlKamu, loadAllDonations } from "../action/index";


class GLdana extends React.Component {

  constructor(props) {
    super(props);
    this.hanldeBack = this.hanldeBack.bind(this)

  }

  hanldeBack(){

    this.props.loadAllDonations(
      this.props.navigation.navigate("Home")
    )

  }


  render() {

    let idUser = 1001; //this a start user id
    let { showDetail } = this.props;
       
        

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
              onPress={this.hanldeBack} >
              <Icon name='arrow-back' />
              <Text>Back</Text>
            </Button>
          </Left>
        </Header>
        <Content>
          <Card style={{ backgroundColor: '#156cb3' }}>
            <Card style={{ height: 480 }}>
              <Card style={{ backgroundColor: '#156cb3' }}>
                <Text style={{ color: "white", textAlign: "center", fontWeight: "bold", margin: 20 }}>
                  Penggalangan Dana
            </Text>
              </Card>
              <Row>
              <CardItem cardBody style={{ margin: 10 }}>
              <Button transparent light onPress={() => this.props.navigation.navigate("addPanti")} style={{ }}>
                <Image source={{ uri: "http://pantiyatim.or.id/wp-content/uploads/2018/03/Untitled-2.png" }} style={{ width: 160, height: 110 }} />
              </Button>
              </CardItem>
              <View cardBody style={{ margin: 5, width: 190, height: 50, padding: 15 }}>
                <Text style={{ fontSize: 15 }}>
                  Fitur ini kamu dapat menjadi pengelola panti sekaligus kamu dapat menggalang dana
                </Text>
              </View>
              </Row>

              <Row>
              <CardItem cardBody style={{ margin: 10 }} >
                <Button transparent light onPress={() => this.props.navigation.navigate("addSesama")} style={{ }}>
                <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS-DyjoTf6-bdJ4hyaD-ZgcwHKshScLnZWBHRmBil1kge5pPTkE" }} style={{ width: 160, height: 110 }} />
                </Button>
              </CardItem>
              <View cardBody style={{ margin: 5, width: 190, height: 50, padding: 15 }}>
                <Text style={{ fontSize: 15 }}>
                  Fitur ini kamu dapat menggalang dana untuk membantu sesama
                </Text>
              </View>
              </Row>

              <Row>
              <CardItem cardBody style={{ margin: 10 }}>
                <Button transparent light onPress={() => {showDetail(idUser); this.props.navigation.navigate("galangKamu")}} >
                <Image source={{ uri: "https://4.bp.blogspot.com/-BTP9YpD_eNw/Wbdvr2UstTI/AAAAAAAAMOs/x6qxprsG9t0pq4r1HwqiVqJZTNq5f8OUACLcBGAs/s640/bansoslogo.jpg" }} style={{ width: 165, height: 120 }} />
                </Button>
              </CardItem>
              <View cardBody style={{ margin: 1, width: 160, height: 50, padding: 14 }}>
                <Text style={{ fontSize: 15 }}>
                  Kamu dapat melihat semua penggalangan yang sudah kamu buat disini
                </Text>
              </View>
              </Row>

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
const mapDispatchToProps = dispatch => ({
  showDetail: idUser => {
    dispatch(loadGlKamu(idUser))
  },
  loadAllDonations: () => dispatch(loadAllDonations()),
})

export default connect(
  null,
  mapDispatchToProps
)(GLdana)
