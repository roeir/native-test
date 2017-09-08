import React from 'react';
import { Text, View, ActivityIndicator, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  spinerContainerStyles: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Spiner = ({ size = 'large' }) => {
  const { spinerContainerStyles } = styles;
  return (
    <View style={spinerContainerStyles}>
      <ActivityIndicator size={size} />
    </View>
  );
};

export { Spiner };
