import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import {
  Card,
  CardSection
} from './common';

const styles = StyleSheet.create({
  titleStyles: {
    paddingLeft: 15,
    fontSize: 18,
    color: '#000',
  },
  infoStyles: {
    fontSize: 16,
    paddingLeft: 30,
  },
});

const EmployeeListItem = ({ employee, onLongPress }) => {
  const { name, phone, shift } = employee;
  return (
    <TouchableOpacity
      onLongPress={ onLongPress }
    >
      <View>
        <Card>
          <CardSection>
            <Text style={styles.titleStyles}>
              { name }
            </Text>
          </CardSection>
          <CardSection>
            <Text style={styles.infoStyles}>
              Tel.: { phone }
            </Text>
          </CardSection>
          <CardSection>
            <Text style={styles.infoStyles}>
              Shift: { shift }
            </Text>
          </CardSection>
        </Card>
      </View>
    </TouchableOpacity>
  );
};

export default EmployeeListItem;
