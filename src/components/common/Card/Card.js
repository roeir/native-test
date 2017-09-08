import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    borderColor: '#ddd',
    borderRadius: 2,
    borderWidth: 1,
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginHorizontal: 5,
    marginTop: 10,
  },
});

const Card = (props) => {
  const { container } = styles;
  return (
    <View style={container}>
      { props.children }
    </View>
  );
};

export { Card };
