import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import firebase from 'firebase';

import LoginForm from './components/Login/LoginForm';
import { Header, OrderButton, Spiner } from './components/common';

const styles = StyleSheet.create({
  contentContainer: {
    elevation: 1,
  },
});

class App extends Component {
  state = {
    loggedIn: null,
  };

  componentDidMount() {
    const config = {
      apiKey: 'AIzaSyAwmB5SdIYyxkTvXdhvVcrcOSDSZlY3-nA',
      authDomain: 'test-auth-5ecbc.firebaseapp.com',
      databaseURL: 'https://test-auth-5ecbc.firebaseio.com',
      projectId: 'test-auth-5ecbc',
      storageBucket: 'test-auth-5ecbc.appspot.com',
      messagingSenderId: '59793436054',
    };
    firebase.initializeApp(config);
    firebase.auth().onAuthStateChanged(user =>
      this.setState({ loggedIn: !!user })
    );
  }

  handleLogOut = () =>
    firebase.auth().signOut()
      .then(() => this.setState({ loggedIn: false }));

  renderContent = (state) => ({
    false: (<LoginForm />),
    true: (
      <View style={{ flexDirection: 'row' }}>
        <OrderButton title="Log Out" onPress={this.handleLogOut} />
      </View>
    ),
    null: (
      <View style={{ flexDirection: 'row' }}>
        <Spiner />
      </View>
    ),
  }[state]);

  render() {
    const { contentContainer } = styles;
    const { loggedIn } = this.state;
    return (
      <View>
        <Header headerText="Auth" />
        { this.renderContent(loggedIn) }
      </View>
    );
  }
}

export default App;
