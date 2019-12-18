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
import { API_URL } from '../helpers/accessImage';


export default class UserItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data:[]
      
    }
    this.handleLogout = this.handleLogout.bind(this)
  }

  handleLogout() {
    
    
    this.props.processLogout(
      this.props.navigation.navigate("Home")
    )

    
  }





  render() {
    let { _id, nama, alamat, foto, showDetail } = this.props
    console.log("userItem",  _id, nama, alamat, foto);
    let idUser = _id

    return (

      <Card>
        <Card style={{ height: 230 }}>
          <Text style={{ color: "Black", textAlign: "center", fontWeight: "bold" }}>
            Account
            </Text>
          <CardItem style={{ backgroundColor: '#156cb3' }}>
            <Row>
              <Image source={{ uri: `${API_URL}images/uploaded_image/user/${foto}` }} style={{ width: 120, height: 180, justifyContent: 'center' }} />
              <Card style={{ width: 190, left: 15 }}>
                <View>
                  <Text style={{ color: "black", textAlign: "left", fontWeight: "bold", }}>
                    Nama    : {nama}
            </Text>
                </View>
                <View>
                  <Text style={{ color: "black", textAlign: "left", fontWeight: "bold" }}>
                    Alamat  : {alamat}
            </Text>
                </View>

              </Card>

            </Row>
          </CardItem>

        </Card>
        <Card>
          <View>
            {/* <Button
              style={{
                textAlign: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                margin: 5
                
              }}
              onPress={() => (this.props.navigation.navigate("galangKamu"))}
              success>
              <Text style={{ color: "black", textAlign: "left", fontWeight: "bold", }}>
                List Donasi
            </Text>
            </Button> */}

            <Button
              style={{
                textAlign: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                margin: 5
                
              }}
              onPress={() => {showDetail(idUser); this.props.navigation.navigate("GLdanaProfile")}}
              success>
              <Text style={{ color: "black", textAlign: "left", fontWeight: "bold", }}>
                List Donasi
            </Text>
            </Button>
          </View>

          <View>
            <Button
              style={{
                textAlign: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                margin: 5
              }}
              danger>
              <Text style={{ color: "black", textAlign: "left", fontWeight: "bold" }}>
                Hapus Akun
            </Text>
            </Button>
          </View>

          <View>
            <Button
              style={{
                textAlign: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                margin: 5
              }}
              warning onPress={this.handleLogout}>
              <Text style={{ color: "black", textAlign: "left", fontWeight: "bold" }}>
                Logout
              </Text>
            </Button>
          </View>

          <Row style={{ margin: 16 }}>
            <Left>
              <Button
                style={{
                  textAlign: 'center',
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: 5
                }}
                danger onPress={() => this.props.navigation.navigate("Home")}>
                <Text style={{ color: "white", textAlign: "left", fontWeight: "bold" }}>
                  Back
            </Text>
              </Button>
            </Left>

            <Right>
              <Button
                style={{
                  textAlign: 'center',
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: 5,
                }}
                primary>
                <Text style={{ color: "white", textAlign: "left", fontWeight: "bold" }}>
                  Chat Admin
            </Text>
              </Button>
            </Right>

          </Row>

        </Card>
      </Card>

    );
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});