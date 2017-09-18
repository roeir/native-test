import React, { Component } from 'react';
import { connect } from 'react-redux';
import { text as sendText } from 'react-native-communications';
import { NavigationActions } from 'react-navigation';

import { setEditedEmployee, saveEmployee, employeeDelete } from '../actions/EmployeeActions';

import {
  CardSection,
  Card,
  OrderButton,
  Confirm,
} from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {

  state = {
    modalVisible: false,
  };

  componentDidMount() {
    const { name, phone, shift } = this.props.navigation.state.params.employee;
    this.props.setEditedEmployee({ name, phone, shift });
  }

  saveEmployee = () => {
    const { employee: { uid } } = this.props.navigation.state.params;
    const { name, phone, shift, navigation } = this.props;
    this.props.saveEmployee({ name, phone, shift, uid })
      .then(() => navigation.navigate('EmployeeList'))
      .catch(err => console.log(err));
  };

  handleTextPress = () =>
    sendText(this.props.phone);

  handleDeclineDelete = () =>
    this.setState({
      modalVisible: false,
    });

  handleAcceptDelete = () => {
    const { employee: { uid } } = this.props.navigation.state.params;
    const { navigation } = this.props;
    this.props.employeeDelete(uid)
      .then(() => {
        this.setState({
          modalVisible: false,
        });
        const actionToDispatch = NavigationActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'EmployeeList'})]
        });
        this.props.navigation.dispatch(actionToDispatch);
      })
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
          <OrderButton title="Save" onPress={this.saveEmployee}/>
        </CardSection>
        <CardSection>
          <OrderButton title="Text" onPress={this.handleTextPress}/>
        </CardSection>
        <CardSection>
          <OrderButton
            title="Delete"
            onPress={() => { this.setState({ modalVisible: !this.state.modalVisible }) }}
          />
        </CardSection>

        <Confirm
          visible={this.state.modalVisible}
          onAccept={this.handleAcceptDelete}
          onDecline={this.handleDeclineDelete}
        >
          Are you sure you want to delete this?
        </Confirm>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  ...{ name, phone, shift} = state.employeeForm
});

export default connect(
  mapStateToProps,
  { setEditedEmployee, saveEmployee, employeeDelete }
)(EmployeeEdit);
