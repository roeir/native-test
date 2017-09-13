import React from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  inputStyles: {
    flex: 3,
    fontSize: 18,
  },
  labelStyles: {
    marginRight: 10,
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  }
});

const Input = ({ label, onTextChange, onChange, onEndEditing, value, secure, autocorrect }) => {
  const { inputStyles, labelStyles, inputContainer } = styles;
  return (
    <View style={inputContainer}>
      <Text style={labelStyles}>{label}</Text>
      <TextInput
        autoCorrect={autocorrect || false}
        secureTextEntry={secure || false}
        style={inputStyles}
        value={value}
        onChangeText={onTextChange}
        onChange={onChange}
        onEndEditing={onEndEditing}
      />
    </View>
  );
};

export { Input };
