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

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './src/components/Home';

const RootStack = createStackNavigator(
    {
        Home: {screen: Home}
    },
    {
        initialRouteName: 'Home'
    }
)

const AppContainer = createAppContainer(RootStack);

const App: () => React$Node = () => {
  return (
      <AppContainer />
  );
};

export default App;
