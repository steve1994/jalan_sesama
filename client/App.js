/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './src/components/Home';
import ListPanti from './src/components/ListPanti';
import GLdana from './src/components/GLdana';
import addPanti from './src/components/addPanti';
import addSesama from './src/components/addSesama';
import galangKamu from './src/components/galangKamu';
import DTKontrib from './src/components/DTKontrib';
import addDonasi from './src/components/addDonasi';
import DetailGL from './src/components/DetailGL';
import LoginRegis from './src/components/LoginRegis';
import HomeUser from './src/components/HomeUser';
import ProfileUser from './src/components/ProfileUser';


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
    ProfileUser: { screen: ProfileUser }


  },
  {
    initialRouteName: 'Home', headerMode: 'none'
  }
)

const AppContainer = createAppContainer(RootStack);

const App: () => React$Node = () => {
  return (
    <AppContainer />
  );
};

export default App;
