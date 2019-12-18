import React from 'react';
import { ProgressBarAndroid, StyleSheet, Image, View, TouchableOpacity } from 'react-native';
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
import ItemDonations from '../../container/DataKontrib/ItemDonations';

export default class Donations extends React.Component {

  constructor(props) {
    super(props)

  }

  componentDidMount() {

    let { detailKontrib } = this.props


    const dataPenggalangan = detailKontrib.map(item => {
      let idUsing = item._id
      let type = item.type
      return { idUsing, type }
    })


    this.props.loadDataPenggalang(
      dataPenggalangan
    )

  }


  render() {
    let { showDetail } = this.props

    return (
      <Card style={{ backgroundColor: '#156cb3' }}>
        <Card style={{ height: 315, backgroundColor: '#156cb3' }} >
          <CardItem style={{ justifyContent: "flex-end", height: 48, }}>
            <Text style={{ fontWeight: "bold" }}>List Penggalangan Dana</Text>
            <Right>
              <Button
                onPress={() => this.props.navigation.navigate("addDonasi")} style={{ margin: 10, backgroundColor: '#268026', width: 80, }}>
                <Text style={{ fontSize: 12 }}>Tambah Donasi</Text>
              </Button>
            </Right>
          </CardItem>

          <List dataArray={this.props.DataDonasi}
            Vertical
            renderRow={(item) =>
              <ItemDonations
              navigation = {this.props.navigation}
              {...item}
              />
            }>
          </List>
        </Card>
      </Card>
    )


  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});