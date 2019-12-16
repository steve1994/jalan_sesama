import React from 'react';
import { Image, View, TouchableOpacity, StyleSheet, PixelRatio } from 'react-native';
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





export default class addDonasi extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      judul: '',
      deskripsi: '',
      nominalSet: '',
      fotoGalang: null

    }
    this.handleJudul = this.handleJudul.bind(this);
    this.handleDeskripsi = this.handleDeskripsi.bind(this);
    this.handleNominal = this.handleNominal.bind(this);
    this.savePenggalangan = this.savePenggalangan.bind(this);
  }

  handleJudul(value) {
    this.setState({ judul: value })
  }

  handleDeskripsi(value) {
    this.setState({ deskripsi: value })
  }

  handleNominal(value) {
    this.setState({ nominalSet: value })
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
          fotoGalang: response.uri

        });
      }
    });
  }


  savePenggalangan() {

    let { detailKontrib } = this.props

    let using = detailKontrib.map(item => {
      let idUsing = item._id;
      let nama = item.nama;
      let alamat = item.alamat;
      let type = item.type;

      return { idUsing, nama, alamat, type };
    })

    using.map(item =>
      this.props.postPenggalangan(
        item.idUsing,
        item.nama,
        item.alamat,
        item.type,
        this.state.judul,
        this.state.deskripsi,
        this.state.nominalSet,
        this.state.fotoGalang,
      )
    )

    const dataPenggalangan = detailKontrib.map(item => {
      let idUsing = item._id
      let type = item.type
      return { idUsing, type }
    })
    this.props.loadDataPenggalang(
      dataPenggalangan,
      this.props.navigation.navigate("KontribProfile"),
    )
    this.setState({ judul: '', deskripsi: '', nominalSet: '', fotoGalang: null })


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
              onPress={() => this.props.navigation.navigate("KontribProfile")} >
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
                  Tambahkan Data Penggalang Baru
                  </Text>
              </Card>

              <Card>
                <Form>
                  <Item floatingLabel>
                    <Label>Judul Penggalangan</Label>
                    <Input onChangeText={this.handleJudul} />
                  </Item>
                  <Item floatingLabel>
                    <Label>Deskripsi</Label>
                    <Input onChangeText={this.handleDeskripsi} />
                  </Item>
                  <Item floatingLabel>
                    <Label>Masukan Jumlah Nominal</Label>
                    <Input onChangeText={this.handleNominal} />
                  </Item>
                  <Item>
                    <Label style={{ color: "black", fontSize: 15 }}>Take Pict</Label>
                    <Card style={{ height: 100, left: 70 }}>

                      <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>

                        <View style={styles.ImageContainer}>

                          {this.state.fotoGalang === null ? <Text>Select a Photo</Text> :
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
                  }} onPress={this.savePenggalangan}>
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