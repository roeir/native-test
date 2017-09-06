import React from 'react';
// import propTypes from ''
import {
  Text,
  StyleSheet,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 24,
    color: '#000',
  },
  viewStyle: {
    backgroundColor: '#f8f8f8',
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    borderStyle: 'solid',
    borderBottomColor: '#000',
    elevation: 2,
    position: 'relative',
  },
});

const Header = ({ headerText }) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{ headerText.toUpperCase() }</Text>
    </View>
  );
};

export default Header;
