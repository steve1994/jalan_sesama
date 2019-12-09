import React from 'react';
import { ProgressBarAndroid, StyleSheet, Image, View , TouchableOpacity} from 'react-native';
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

    this.loadDetail = this.loadDetail.bind(this)
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

  loadDetail() {


    // let { DataDonasi } = this.props

    // {DataDonasi.map(item => {
    //   return(
    //   this.props.loadDetailDonasi(
        
    //     item._id,
    //     item.type,

    //     )
    //     )
    //   })}
      
      this.props.navigation.navigate("DetailGL")


  }








  render() {
    let { showDetail } = this.props

    
    
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
              <ListItem >
                <Card style={{ width: 310 }}>
                  <Card>
                    <Row>
                      <CardItem style={{ width: "65%" }}>
                        <Text>{item.judul}</Text>
                      </CardItem>
                      <CardItem style={{ right: 20 }}>
                        <Text> Status : </Text>
                      </CardItem>
                    </Row>
                  </Card>
                  <Right>
                    <Text style={{ left: 90 }}> {item.status} </Text>
                  </Right>
                  <View style={styles.container}>
                    <ProgressBarAndroid />
                    <Row>
                      <Text style={{ fontSize: 12, left: 5 }}>Rp. {item.nominalProcess}</Text>
                      <Right>
                        <Text style={{ fontSize: 12, right: 5 }}>Rp. {item.nominalSet}</Text>
                      </Right>
                    </Row>

                    <ProgressBarAndroid
                      styleAttr="Horizontal"
                      indeterminate={false}
                      progress={item.nominalProcess / item.nominalSet}
                    />



                    <CardItem style={{ justifyContent: "flex-end" }}>
                      <Right>
                        <Row>

                          <Button
                            onPress={() => {this.props.navigation.navigate("DetailGL");{showDetail(item._id, item.type)}}}
                            style={{ backgroundColor: '#2b37c2', right: 140 }}>
                            <Text style={{ fontSize: 12 }}>Detail</Text>
                          </Button>

                          <Button
                            onPress={() => {showDetail(item._id, item.type)}}
                            style={{ backgroundColor: '#268026' }}>
                            <Text style={{ fontSize: 12 }}>Done</Text>
                          </Button>
                        </Row>
                      </Right>
                    </CardItem>
                   

                  </View>
                </Card>
              </ListItem>
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