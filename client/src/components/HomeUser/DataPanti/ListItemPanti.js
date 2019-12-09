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
  Thumbnail
} from 'native-base';
import { API_URL } from '../../../helpers/accessImage';


export default class ListItemPanti extends React.Component {

  constructor(props) {
    super(props)

    this.showDetail = this.showDetail.bind(this);
  }

  showDetail() {

    const { _id, type } = this.props
    let idUsing = _id
    this.props.loadData(
      idUsing,
      type,
      this.props.navigation.navigate("KontribHome")
    )
  }

  



  render() {
    let { nama, alamat, jumlahOrang, foto } = this.props

    return (
      <ListItem >
        <Card style={{ width: 310, height: 430 }}>
          <Card style={{ borderBottomColor: "black" }}>
            <Text style={{ textAlign: "center", fontWeight: "bold", margin: 20 }}>
              {nama}
            </Text>
          </Card>
          <CardItem cardBody>
            <Image source={{ uri: `${API_URL}images/uploaded_image/panti/${foto}` }} style={{ width: 309, height: 200 }} />
          </CardItem>
          <View>
            <Item>
              <Text> Alamat : {alamat} </Text>
            </Item>
            <Item>
              <Text> Jumlah Penghuni :   {jumlahOrang} </Text>
            </Item>

            <CardItem style={{ justifyContent: "flex-end" }}>
              <Right>
                  <Button
                    onPress={this.showDetail}
                    style={{ backgroundColor: '#268026', padding: "5%", marginTop:20 }}>
                    <Text style={{ fontSize: 12 }}>Detail</Text>
                  </Button>
              </Right>
            </CardItem>
          </View>
        </Card>

      </ListItem>

    );
  }

}
