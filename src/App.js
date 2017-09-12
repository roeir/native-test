import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { Provider } from 'react-redux';

import { configureStore } from './configureStore'

import { Header } from './components/common';
import LibratyList from './components/LibraryList';

const store = configureStore();

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Header headerText="Tech Stack" />
          <LibratyList />
        </View>
      </Provider>
    );
  }
}

export default App;
