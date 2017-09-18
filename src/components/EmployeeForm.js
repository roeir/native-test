import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  View,
  Picker
} from 'react-native';

import {
  Input,
  CardSection
} from './common';

import { updateEmployee } from '../actions/EmployeeActions';

const styles = StyleSheet.create({
  pickerStyles: {
    flex: 3,
  },
  pickerLabel: {
    flex: 1,
  }
});

class EmployeeForm extends Component {

  static propTypes = {
    updateEmployee: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    shift: PropTypes.string.isRequired,
  };

  handleInputChange = input =>
    text => this.props.updateEmployee(input, text);

  render() {
    const { name, phone, shift } = this.props;

    return (
      <View>
        <CardSection>
          <Input
            label="Name"
            value={name}
            onTextChange={this.handleInputChange('name')}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Phone"
            value={phone}
            onTextChange={this.handleInputChange('phone')}
          />
        </CardSection>
        <CardSection>
          <Text style={styles.pickerLabel}>Shift: </Text>
          <Picker
            style={styles.pickerStyles}
            selectedValue={shift}
            onValueChange={this.handleInputChange('shift')}
          >
            <Picker.Item label="Monday" value="Monday"/>
            <Picker.Item label="Tuesday" value="Tuesday"/>
            <Picker.Item label="Wednesday" value="Wednesday"/>
            <Picker.Item label="Thursday" value="Thursday"/>
            <Picker.Item label="Friday" value="Friday"/>
            <Picker.Item label="Saturday" value="Saturday"/>
            <Picker.Item label="Sunday" value="Sunday"/>
          </Picker>
        </CardSection>
      </View>
    );
  }
}

export default connect(
  null,
  { updateEmployee }
)(EmployeeForm);
