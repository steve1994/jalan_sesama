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

export default class Donations extends React.Component {

  constructor(props) {
    super(props)

    this.loadDetail = this.loadDetail.bind(this);
  }

  // componentDidMount() {

  //   let { detailKontrib } = this.props


  //   const dataPenggalangan = detailKontrib.map(item => {
  //     let idUsing = item._id
  //     let type = item.type
  //     return { idUsing, type }
  //   })


  //   this.props.loadDataPenggalang(
  //     dataPenggalangan
  //   )

  // }

  loadDetail() {

    let { _id, type } = this.props

    this.props.showDetail(
      _id, type,
      this.props.navigation.navigate("DetailGLUmum")
    )

  }


  render() {

    let { _id, type, judul, status, nominalSet, nominalProcess, showDetail } = this.props




    // let statusProps = this.props.DataDonasi.map((items) => {
    //   let status = items.status

    //   if (status == "pending") {

    //     console.log("PENDING");

    //   } else if (status == "reject") {

    //      console.log("REJECT");

    //   } else {
    //      console.log("approve");

    //   }
    //   return(status)



    // })



    return (

      <ListItem >
        <Card style={{ width: 310 }}>
          <Card>
            <Row>
              <CardItem style={{ width: "65%" }}>
                <Text>{judul}</Text>
              </CardItem>
              <CardItem style={{ right: 20 }}>
                <Text> Status : </Text>
              </CardItem>
            </Row>
          </Card>
          <Right>
            <Text style={{ left: 90 }}> {status} </Text>
          </Right>
          <View style={styles.container}>
            <ProgressBarAndroid />
            <Row>
              <Text style={{ fontSize: 12, left: 5 }}>Rp. {nominalProcess}</Text>
              <Right>
                <Text style={{ fontSize: 12, right: 5 }}>Rp. {nominalSet}</Text>
              </Right>
            </Row>

            <ProgressBarAndroid
              styleAttr="Horizontal"
              indeterminate={false}
              progress={nominalProcess / nominalSet}
            />



            <CardItem style={{ justifyContent: "flex-end" }}>
              <Right>
                  <Button
                    onPress={this.loadDetail}
                    style={{ backgroundColor: '#2b37c2', right: 10, padding:4 }}>
                    <Text style={{ fontSize: 12 }}>Detail</Text>
                  </Button>  
              </Right>
            </CardItem>


          </View>
        </Card>
      </ListItem>
    )


  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});