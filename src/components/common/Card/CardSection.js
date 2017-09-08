import React from 'react';
import { View } from 'react-native';

const styles = {
  container: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
};

const CardSection = (props) => {
  const { container } = styles;
  return (
    <View style={container}>
      { props.children }
    </View>
  );
};

export { CardSection };
