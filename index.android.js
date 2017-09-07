import React from 'react';
import {
  AppRegistry,
  View,
} from 'react-native';

import Header from './src/components/Header';
import Albums from './src/components/Albums/Albums';

const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'albums'} />
    <Albums />
  </View>
);

AppRegistry.registerComponent('test', () => App);
