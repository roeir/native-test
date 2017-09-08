import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const styles = {
  buttonStyle: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    backgroundColor: '#fff',
    marginHorizontal: 5,
    paddingVertical: 10,
    flex: 1,
    alignSelf: 'stretch',
  },
  buttonTitle: {
    fontSize: 16,
    alignSelf: 'center',
    fontWeight: '600',
    color: '#007aff',
  },
};

const OrderButton = ({ title, onPress }) => {
  const { buttonStyle, buttonTitle } = styles;
  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={buttonTitle}>{ title.toUpperCase() }</Text>
    </TouchableOpacity>
  );
};

OrderButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export { OrderButton };
