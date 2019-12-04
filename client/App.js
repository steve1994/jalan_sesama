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


import Home from './src/components/Home';
import ListPanti from './src/components/ListPanti';
import GLdana from './src/components/GLdana';
import addDonasi from './src/container/DataKontrib/addDonasi';
import DetailGL from './src/components/DetailGL';
import HomeUser from './src/components/HomeUser';
import ProfileUser from './src/components/ProfileUser';
import beriDonasi from './src/components/beriDonasi';

//new add
import DTKontrib from './src/container/DataKontrib/DTKontrib';
import addPanti from './src/container/panti/addPanti';
import LoginRegis from './src/container/LoginRegis/LoginRegis';
import galangKamu from './src/container/galangKamu/galangKamu';
import addSesama from './src/container/galangKamu/addSesama';




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


  },
  {
    initialRouteName: 'GLdana', headerMode: 'none'
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
