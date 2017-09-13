import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import {Provider} from 'react-redux';
import firebase from 'firebase';

import configureStore from './configureStore';

import LoginForm from './components/Auth/LoginForm'

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
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <LoginForm/>
        </View>
      </Provider>
    );
  }
}

export default App;
