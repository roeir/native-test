import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal
} from 'react-native';

import {
  OrderButton,
  CardSection
} from '../common'

const styles = StyleSheet.create({
  cardSection: {
    justifyContent: 'center',
  },
  text: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40,
  },
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
  },
});

const Confirm = ({ children, onAccept, onDecline, visible }) => {
  return (
    <Modal
      animationType="slide"
      onRequestClose={() => {}}
      visible={visible}
      transparent
    >
      <View style={styles.container}>
        <CardSection style={styles.cardSection}>
          <Text style={styles.textStyle}>{ children }</Text>
        </CardSection>

        <CardSection>
          <OrderButton title="Yes" onPress={onAccept}/>
          <OrderButton title="No" onPress={onDecline}/>
        </CardSection>
      </View>
    </Modal>
  );
};

export { Confirm };
