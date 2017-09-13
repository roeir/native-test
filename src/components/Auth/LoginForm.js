import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { inputChanged, loginUser } from '../../actions/AuthActions';

import {
  CardSection,
  Card,
  Input,
  Spiner,
  OrderButton
} from '../common';

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  error: {
    color: 'red',
    flex: 1,
    textAlign: 'center',
  },
});

class LoginForm extends Component {

  static propTypes = {
    inputChanged: PropTypes.func.isRequired,
    loginUser: PropTypes.func.isRequired,
    error: PropTypes.shape({
      code: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
    }),
    loading: PropTypes.bool,
    formValues: PropTypes.shape({
      'email': PropTypes.string,
      'password': PropTypes.string,
    }).isRequired,
  };

  handleInputChange = input =>
    text => {
      // const text = event.nativeEvent.text;
      this.props.inputChanged(input, text);
    };

  renderLoading = () =>
    this.props.loading
      ? <Spiner size="large" />
      : <OrderButton
        title="Login"
        onPress={() => this.props.loginUser(this.props.formValues)}
      />;

  render() {
    const { email, password } = this.props.formValues;
    const { error } = this.props;
    return (
      <View>
        <Card>
          <CardSection>
            <Input
              placeholder="email"
              label="email"
              onTextChange={this.handleInputChange('email')}
              value={email}
            />
          </CardSection>
          <CardSection>
            <Input
              secure={true}
              placeholder="password"
              label="password"
              onTextChange={this.handleInputChange('password')}
              value={password}
            />
          </CardSection>
          <CardSection>
            { this.renderLoading() }
          </CardSection>
          {
            error && (
              <CardSection>
                <Text style={styles.error}>{ error.message }</Text>
              </CardSection>
            )
          }
        </Card>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  formValues: state.auth,
  error: state.auth.error,
  loading: state.auth.loading,
});

export default connect(
  mapStateToProps,
  { inputChanged, loginUser },
)(LoginForm);
