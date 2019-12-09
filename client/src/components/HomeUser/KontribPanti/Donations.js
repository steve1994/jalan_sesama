import React from 'react';
import { ProgressBarAndroid, StyleSheet, Image, View, TouchableOpacity, ScrollView } from 'react-native';
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
import ItemDonasi from '../../../container/HomeUmum/KontribPanti/ItemDonasi'


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
    let { DataDonasi } = this.props
    
    


    let statusProps = this.props.DataDonasi.map((items) => {
      if (items.status == "pending") {
        // return console.log("PENDING");

      } else if (items.status == "reject") {

        return console.log("REJECT");

      } else {
        return console.log("approve");

      }
    })







    return (
      <Card style={{ backgroundColor: '#156cb3' }}>
        <Card style={{ height: 278, backgroundColor: '#156cb3' }} >
          <CardItem style={{ justifyContent: "center", height: 48, }}>
            <Text style={{ fontWeight: "bold" }}>List Penggalangan Dana</Text>
          </CardItem>
          <ScrollView style={{ backgroundColor: '#156cb3' }}>
            {DataDonasi.map((items, i) => {
              return (
                <ItemDonasi
                  navigation={this.props.navigation}
                  {...items}
                />
              )
            })}

          </ScrollView>
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