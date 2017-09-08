import React, { Component } from 'react';
import {View, StyleSheet, TextInput, Text } from 'react-native';
import firebase from 'firebase';

import { CardSection, Card, OrderButton, Input, Spiner} from '../common';

const styles = StyleSheet.create({
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  formErrorStyle: {
    color: 'red',
    fontSize: 20,
    alignSelf: 'center',
  }
});

class LoginForm extends Component {
  state = {
    data: {
      email: '',
      password: '',
    },
    formError: '',
    loading: false,
  };

  handleFormSubmit = () => {
    this.setState({ formError: '', loading: true });
    const { email, password } = this.state.data;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(() => firebase.auth().createUserWithEmailAndPassword(email, password))
      .catch(() => this.setState({ formError: 'Authentication Failed' }))
      .then(() => this.setState(this.loginSuccess()));
  };

  handleInputChange = input =>
    text => this.setState(state => ({
      data: {
        ...state.data,
        [input]: text,
      },
    }));

  loginSuccess = () => ({
    data: {
      email: '',
      password: '',
    },
    loading: false,
    formError: '',
  });

  renderSpinerButton = () =>
    this.state.loading ? (<Spiner />) :
      (<OrderButton title="Login" onPress={this.handleFormSubmit} />);

  render() {
    const { inputStyle, formErrorStyle } = styles;
    const { email, password } = this.state.data;
    const { formError } = this.state;
    return (
      <View>
        <Card>
          <CardSection>
            <Input
              label="email"
              onTextChange={this.handleInputChange('email')}
              value={email}
            />
          </CardSection>
          <CardSection>
            <Input
              label="password"
              onTextChange={this.handleInputChange('password')}
              value={password}
              secure={true}
            />
          </CardSection>
          <Text style={formErrorStyle}>
            { formError }
          </Text>
          <CardSection>
            { this.renderSpinerButton() }
            {/*<OrderButton title="Login" onPress={this.handleFormSubmit} />*/}
          </CardSection>
        </Card>
      </View>
    );
  }
}

export default LoginForm;
