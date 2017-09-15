import React, {Component} from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import {Provider} from 'react-redux';
import firebase from 'firebase';

import configureStore from './configureStore';
import { setCurrentUser, logout } from './actions/AuthActions';

import { AppStack } from './AppRouting';

const store = configureStore();

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyCaatdOy-f2Yg7M9VcLyxxXCLQZrhOkvVo",
      authDomain: "manager-a6f67.firebaseapp.com",
      databaseURL: "https://manager-a6f67.firebaseio.com",
      projectId: "manager-a6f67",
      storageBucket: "manager-a6f67.appspot.com",
      messagingSenderId: "887377715458",
    };

    !firebase.apps.length
      ? firebase.initializeApp(config)
      : firebase.app();

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        store.dispatch(setCurrentUser(user));
      } else {
        store.dispatch(logout());
      }
    });
  }
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <AppStack />
        </View>
      </Provider>
    );
  }
}

export default App;
