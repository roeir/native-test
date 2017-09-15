import React, { Component } from 'react';
import {
  StyleSheet,
  Picker,
  View,
  Text,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  Card,
  CardSection,
  Input,
  OrderButton
} from './common';

import { updateEmployee, createEmployee } from '../actions/EmployeeActions';

const styles = StyleSheet.create({
  pickerStyles: {
    flex: 3,
  },
  pickerLabel: {
    flex: 1,
  }
});

class EmployeeCreate extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    shift: PropTypes.string.isRequired,
    updateEmployee: PropTypes.func.isRequired,
    createEmployee: PropTypes.func.isRequired,
  };

  handleInputChange = input =>
    text => this.props.updateEmployee(input, text);

  handleEmployeeCreate = () => {
    const { name, phone, shift, createEmployee } = this.props;
    createEmployee({ name, phone, shift })
      .then(() => this.props.navigation.navigate('EmployeeList'))
      .catch(err => console.log(err));
  };

  render() {
    const { name, phone, shift } = this.props;
    return (
      <Card>
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
        <CardSection>
          <OrderButton title="Create" onPress={this.handleEmployeeCreate}/>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  ...{ name, phone, shift} = state.employeeForm
});

export default connect(
  mapStateToProps,
  { updateEmployee, createEmployee }
)(EmployeeCreate);
