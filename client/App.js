/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import rootReducer from './src/reducers';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';


import GLdana from './src/components/GLdana';
import addDonasi from './src/container/DataKontrib/addDonasi';
import HomeUser from './src/components/HomeUser';
import ProfileUser from './src/container/LoginRegis/ProfileUser';
import Donations from './src/container/DataKontrib/Donations'

//new add
import KontribHome from './src/container/HomeUmum/KontribPanti/KontribHome';
import ListPanti from './src/container/HomeUmum/DataPanti/ListPanti';
import Home from './src/container/HomeUmum/Home';
import DTKontrib from './src/container/DataKontrib/DTKontrib';
import addPanti from './src/container/panti/addPanti';
import LoginRegis from './src/container/LoginRegis/LoginRegis';
import galangKamu from './src/container/galangKamu/galangKamu';
import addSesama from './src/container/panti/addSesama';
import DetailGL from './src/container/galangKamu/DetailGL';
import beriDonasi from './src/container/galangKamu/beriDonasi';
import DetailGLUmum from './src/container/HomeUmum/DetailGLUmum/DetailGLUmum';
import beriDonasiPanti from './src/container/HomeUmum/DetailGLUmum/beriDonasi';
import beriDonasiBeranda from './src/container/HomeUmum/DetailGLBeranda/beriDonasiBeranda';
import DetailGLBeranda from './src/container/HomeUmum/DetailGLBeranda/DetailGLBeranda'
import beriDonasiProfile from './src/container/HomeUmum/DetailGLProfile/beriDonasiProfile';
import DetailGLProfile from './src/container/HomeUmum/DetailGLProfile/DetailGLProfile';
import galangKamuProfile from './src/container/HomeUmum/DetailGLProfile/galangKamuProfile';
import GLdanaProfile from './src/container/HomeUmum/DetailGLProfile/GLdanaProfile';
import addSesamaProfile from './src/container/HomeUmum/DetailGLProfile/addSesamaProfile';
import addPantiProfile from './src/container/HomeUmum/DetailGLProfile/addPantiProfile';
import KontribProfile from './src/container/HomeUmum/DetailGLProfile/KontribProfile/KontribProfile';
import addDonasiProfile from './src/container/HomeUmum/DetailGLProfile/KontribProfile/addDonasiProfile';
import Done from './src/container/galangKamu/Done';
import ChatMessage from './src/container/Message/ChatMessage';





const store = createStore(rootReducer, applyMiddleware(thunk))

const RootStack = createStackNavigator(
  {
    Home: { screen: Home },
    ListPanti: { screen: ListPanti },
    GLdana: { screen: GLdana },
    addPanti: { screen: addPanti },
    addSesama: { screen: addSesama },
    galangKamu: { screen: galangKamu },
    DTKontrib: { screen: DTKontrib },
    addDonasi: { screen: addDonasi },
    DetailGL: { screen: DetailGL },
    LoginRegis: { screen: LoginRegis },
    HomeUser: { screen: HomeUser},
    ProfileUser: { screen: ProfileUser },
    beriDonasi: { screen: beriDonasi },
    Donations: { screen: Donations },
    KontribHome : {screen: KontribHome},
    DetailGLUmum: {screen: DetailGLUmum },
    beriDonasiPanti: {screen: beriDonasiPanti},
    beriDonasiBeranda: {screen: beriDonasiBeranda},
    DetailGLBeranda: {screen: DetailGLBeranda},
    beriDonasiProfile: {screen: beriDonasiProfile},
    DetailGLProfile: {screen: DetailGLProfile},
    galangKamuProfile: {screen: galangKamuProfile},
    GLdanaProfile: {screen: GLdanaProfile},
    addSesamaProfile: {screen:addSesamaProfile},
    addPantiProfile: {screen: addPantiProfile},
    KontribProfile: {screen: KontribProfile},
    addDonasiProfile: {screen: addDonasiProfile},
    Done: {screen: Done},
    ChatMessage: { screen: ChatMessage },
    
  },
  {
    initialRouteName: 'Home', headerMode: 'none'
  }
)

const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <AppContainer />
      </Provider>
      );
    }
  }
