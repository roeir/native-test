import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList
} from 'react-native';
import { connect } from 'react-redux';


import { employeesFetch } from '../actions/EmployeesActions';

import { Spiner } from './common';
import EmployeeListItem from '../components/EmployeeListItem';

const styles = StyleSheet.create({
  headerBtnContainer: {
    paddingRight: 10,
  },
});

class EmployeeList extends Component {
  // static propTypes = {
  //   employeesFetch: PropTypes.func.isRequired,
  //   loading: PropTypes.bool,
  // };

  static navigationOptions = ({ navigation }) => ({
    headerRight: (
      <View style={styles.headerBtnContainer}>
        <Button
          title="Add"
          onPress={() => navigation.navigate('EmployeeCreate')}
        />
      </View>
    ),
  });

  handleItemLongPress = employee =>
    () => this.props.navigation.navigate('EmployeeEdit', { employee });

  componentDidMount() {
    this.props.employeesFetch();
  }

  renderEmployeeList = () => {
    const { employeeList } = this.props;
    return this.props.loading
      ? <Spiner size="large" />
      : <FlatList
        data={employeeList}
        keyExtractor={item => item.uid}
        renderItem={({ item }) => <EmployeeListItem
          onLongPress={this.handleItemLongPress(item) }
          employee={item}
        />}
      />
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <View style={{ flex: 1, paddingBottom: 10, }}>
          {
            this.renderEmployeeList()
          }
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { employeeList: employeeListObj } = state.employees;
  const employeeList = Object.keys(employeeListObj)
    .map(key => ({ uid: key, ...employeeListObj[key] }));

  return {
    loading: state.employees.loading,
    employeeList,
  };
};

export default connect(
  mapStateToProps,
  { employeesFetch }
)(EmployeeList);
