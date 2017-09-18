import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  Card,
  CardSection,
  OrderButton
} from './common';

import { createEmployee } from '../actions/EmployeeActions';
import EmployeeForm from "./EmployeeForm";

class EmployeeCreate extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    shift: PropTypes.string.isRequired,
    createEmployee: PropTypes.func.isRequired,
  };

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
        <EmployeeForm
          name={name}
          phone={phone}
          shift={shift}
        />
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
  { createEmployee }
)(EmployeeCreate);
