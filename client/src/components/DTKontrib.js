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


export default class DTKontrib extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {

    const items = ['Perbaikan atap bocor', 'Membeli perlengkapan lansia', 'Anak kecil sakit', 'Perlu kursi roda', 'Bawa kakek rusman belanja'];

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
              onPress={() => this.props.navigation.navigate("galangKamu")} >
              <Icon name='arrow-back' />
              <Text>Back</Text>
            </Button>
          </Left>
        </Header>
        <Card style={{ height: 150 }}>
          <CardItem style={{ backgroundColor: '#156cb3' }}>
            <Image source={{ uri: "http://www.infobdg.com/v2/wp-content/uploads/2019/05/Anak-Anak-Panti-Asuhan.jpg" }} style={{ width: 320, height: 100, justifyContent: 'center' }} />
          </CardItem>
          <Text style={{ color: "Black", textAlign: "center", fontWeight: "bold" }}>
            TITLE : Nama Panti Asuhan / Bantu Sesama
            </Text>
        </Card>
        <Tabs>
          <Tab heading={<TabHeading><Icon name="" /><Text>About</Text></TabHeading>} style={{ backgroundColor: '#156cb3' }}>

            <Form>
              <Item>
                <Label style={{ color: "white", margin: 9 }}>Nama</Label>
                <View cardBody style={{ width: 270 }}>
                  <Text style={{ fontSize: 15, color: "black" }}>
                    Panti Asuhan Girang
                </Text>
                </View>
              </Item>
            </Form>
            <Form>
              <Item>
                <Label style={{ color: "white", margin: 9 }}>Alamat</Label>
                <View cardBody style={{ width: 270 }}>
                  <Text style={{ fontSize: 15, color: "black" }}>
                    Jl. Sukaluyu
                </Text>
                </View>
              </Item>
            </Form>
            <Form>
              <Item>
                <Label style={{ color: "white", margin: 9 }}>Jumlah Penghuni</Label>
                <View cardBody style={{ width: 270 }}>
                  <Text style={{ fontSize: 15, color: "black" }}>
                    35 Orang
                </Text>
                </View>
              </Item>
            </Form>
          </Tab>

          <Tab heading={<TabHeading><Text>Locations</Text></TabHeading>}>
            <CardItem style={{ backgroundColor: '#156cb3' }}>
              <Row>
                <Image source={{ uri: "https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg" }} style={{ width: 200, height: 272 }} />

                <Button primary style={{
                  padding: '5%', margin: 10, left: 7, backgroundColor: '#268026'
                }}>
                  <Text>Check</Text>
                </Button>
              </Row>
            </CardItem>
          </Tab>

          <Tab heading={<TabHeading><Icon name="" /><Text>Donations</Text></TabHeading>} style={{}}>

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
                                onPress={() => this.props.navigation.navigate("DetailGL")} style={{ backgroundColor: '#2b37c2', right:140 }}>
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

          </Tab>

        </Tabs>
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