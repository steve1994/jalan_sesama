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

export default class Donations extends React.Component {

  constructor(props) {
    super(props)


  }






  render() {
    const items = ['Perbaikan atap bocor', 'Membeli perlengkapan lansia', 'Anak kecil sakit', 'Perlu kursi roda', 'Bawa kakek rusman belanja'];
    


    return (
      <Card style={{ backgroundColor: '#156cb3' }}>
        <Card style={{ height: 278, backgroundColor: '#156cb3' }} >
          <CardItem style={{ justifyContent: "flex-end", height: 48, }}>
            <Text style={{ fontWeight: "bold" }}>List Penggalangan Dana</Text>
            <Right>
              <Button
                onPress={() => this.props.navigation.navigate("addDonasi")} style={{ margin: 10, backgroundColor: '#268026', width: 80, }}>
                <Text style={{ fontSize: 12 }}>Tambah Donasi</Text>
              </Button>
            </Right>
          </CardItem>

          <List dataArray={items}
            Vertical
            renderRow={(item) =>
              <ListItem >
                <Card style={{ width: 310 }}>
                  <CardItem style={{}}>
                    <Text> {item} </Text>
                  </CardItem>

                  <View style={styles.container}>
                    <ProgressBarAndroid />
                    <Row>
                      <Text style={{ fontSize: 12, left: 5 }}>Rp.650.000</Text>
                      <Right>
                        <Text style={{ fontSize: 12, right: 5 }}>Rp.1.000.000</Text>
                      </Right>
                    </Row>
                    <ProgressBarAndroid
                      styleAttr="Horizontal"
                      indeterminate={false}
                      progress={0.8}
                    />


                    <CardItem style={{ justifyContent: "flex-end" }}>
                      <Right>
                        <Row>
                          <Button
                            onPress={() => this.props.navigation.navigate("DetailGL")} style={{ backgroundColor: '#2b37c2', right: 140 }}>
                            <Text style={{ fontSize: 12 }}>Detail</Text>
                          </Button>
                          <Button
                            onPress={() => this.props.navigation.navigate("Detail")} style={{ backgroundColor: '#268026' }}>
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