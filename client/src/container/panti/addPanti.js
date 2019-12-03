import React from 'react';
import { StyleSheet, Image, View, TextInput, TouchableOpacity, PixelRatio } from 'react-native';
import { connect } from "react-redux";
import { postPanti } from '../../action/index';

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
  Form,
  Label,
  Input,
  Textarea

} from 'native-base';

import ImagePicker from 'react-native-image-picker';


class addPanti extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      judul: '',
      nama: '',
      alamat: '',
      deskripsi: '',
      jumlahOrang: '',
      location: '',
      fotoPanti: null

    };
    this.handleJudul = this.handleJudul.bind(this);
    this.handleNama = this.handleNama.bind(this);
    this.handleAlamat = this.handleAlamat.bind(this);
    this.handleDeskripsi = this.handleDeskripsi.bind(this);
    this.handleLocation = this.handleLocation.bind(this);
    this.handleJumlahOrang = this.handleJumlahOrang.bind(this)
    this.SavePanti = this.SavePanti.bind(this);
  }

  handleJudul(value) {
    this.setState({ judul: value })
  }

  handleNama(value) {
    this.setState({ nama: value })
  }

  handleAlamat(value) {
    this.setState({ alamat: value })
  }

  handleDeskripsi(value) {
    this.setState({ deskripsi: value })
  }

  handleLocation(value) {
    this.setState({ location: value })
  }

  handleJumlahOrang(value) {
    this.setState({ jumlahOrang: value })
  }

  selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      mediaType: 'photo',
      storageOptions: {
        skipBackup: true
      }
    };

    ImagePicker.showImagePicker(options, (response) => {
      // console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {

        let source = { uri: response.uri };
        console.log('dataRes', source);

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({

          uploadImg: source,
          fotoPanti: response.uri

        });
      }
    });
  }

  SavePanti() {

    this.props.postPanti(
      this.state.judul,
      this.state.nama,
      this.state.alamat,
      this.state.deskripsi,
      this.state.jumlahOrang,
      this.state.location,
      this.state.fotoPanti
    )
    this.setState({ judul: '', nama: '',alamat: '',deskripsi: '',jumlahOrang: '',location: '',fotoPanti: null});
    this.props.navigation.navigate('GLdana');


  }


  render() {


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
              onPress={() => this.props.navigation.navigate("Home")} >
              <Icon name='arrow-back' />
              <Text>Back</Text>
            </Button>
          </Left>
        </Header>
        <Content>
          <Card style={{ backgroundColor: '#156cb3' }}>
            <Card>
              <Card style={{ backgroundColor: '#156cb3' }}>
                <Text style={{ color: "white", textAlign: "center", fontWeight: "bold", margin: 20 }}>
                  Tambahkan Data Panti Asuhan
                  </Text>
            </Card>
              
              <Card>
                <Form>

                <Item>
                    <Label>Judul Panti</Label>
                    <Content>
                      <Form>
                        <TextInput rowSpan={5} bordered placeholder="Textarea" onChangeText={this.handleJudul} />
                      </Form>
                    </Content>
                  </Item>

                  <Item>
                    <Label>Nama</Label>
                    <Content>
                      <Form>
                        <TextInput rowSpan={5} bordered placeholder="Textarea" onChangeText={this.handleNama} />
                      </Form>
                    </Content>
                  </Item>

                  <Item>
                    <Label>Alamat</Label>
                    <Content>
                      <Form>
                        <TextInput rowSpan={5} bordered placeholder="Textarea" onChangeText={this.handleAlamat} />
                      </Form>
                    </Content>
                  </Item>
                
                  <Item>
                    <Label>Jumlah Penghuni</Label>
                    <Content>
                      <Form>
                        <TextInput rowSpan={5} bordered placeholder="Textarea" onChangeText={this.handleJumlahOrang} />
                      </Form>
                    </Content>
                  </Item>

                  <Item>
                    <Label>Deskripsi</Label>
                    <Content padder>
                      <Form>
                        <Textarea rowSpan={5} bordered placeholder="Textarea" onChangeText={this.handleDeskripsi} />
                      </Form>
                    </Content>
                  </Item>

                  
                  <Item>
                    <Label>location</Label>
                    <Content>
                      <Form>
                        <TextInput rowSpan={5} bordered placeholder="Textarea" onChangeText={this.handleLocation} />
                      </Form>
                    </Content>
                  </Item>

                  <Item>
                    <Label style={{ color: "black", fontSize: 15 }}>Take Pict</Label>
                    <Card style={{ height: 100, left: 70 }}>

                      <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>

                        <View style={styles.ImageContainer}>

                          {this.state.uploadImg === null ? <Text>Select a Photo</Text> :
                            <Image style={styles.ImageContainer} source={this.state.uploadImg} />
                          }

                        </View>

                      </TouchableOpacity>
                    </Card>
                  </Item>

                </Form>

                <Row>
                  <Button primary style={{
                    padding: '10%', margin: 20, left: 86
                  }} onPress={this.SavePanti}>
                    <Text>Save</Text>
                  </Button>
                </Row>

              </Card>
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

// const mapDispatchToProps = (dispatch) => ({
//   postPanti: (nama, alamat, username, password, filename) => dispatch(postPanti(nama, alamat, username, password, filename))
// })

const mapDispatchToProps = (dispatch) => ({
  postPanti: (judul, nama, alamat, deskripsi, jumlahOrang, location , fotoPanti) => dispatch(postPanti(judul, nama, alamat, deskripsi, jumlahOrang, location, fotoPanti ))


})

export default connect(
  null,
  mapDispatchToProps
)(addPanti)


const styles = StyleSheet.create({
  inputField: {
    width: 280,
    color: 'white',
    borderColor: 'white',
    marginTop: 5
  },
  Wrapper: {

    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1F3A93',
    height: 490
  },
  text: {
    color: 'blue',
    fontSize: 23
  },

  container: {
    flex: 1,
  },

  ImageContainer: {
    borderRadius: 10,
    width: 100,
    height: 100,
    borderColor: '#9B9B9B',
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CDDC39',

  },
});