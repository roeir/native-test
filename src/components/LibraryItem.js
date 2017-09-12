import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  LayoutAnimation,
  UIManager,
  Platform
} from 'react-native';

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

import { selectLibrary } from '../actions/librariesActions';

import { Card, CardSection } from './common';

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    paddingLeft: 15,
  },
});

const LibraryItem = ({ id, title, description, selectLibrary, expanded }) => {
  LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
  return (
    <TouchableWithoutFeedback
      onPress={() => selectLibrary(id)}
    >
      <View>
        <Card>
          <CardSection>
            <Text style={styles.title}>{ title }</Text>
          </CardSection>
          {
            expanded && (
              <CardSection>
                <Text style={{ flex: 1 }}>{ description }</Text>
              </CardSection>
            )
          }
        </Card>
      </View>
    </TouchableWithoutFeedback>
  );
};

LibraryItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  selectLibrary: PropTypes.func.isRequired,
  expanded: PropTypes.bool,
};

LibraryItem.defaultProps = {
  expanded: false,
};

const mapStateToProps = (state, ownProps) => ({
  expanded: state.selectedLibraryId === ownProps.id,
});

export default connect(
  mapStateToProps,
  { selectLibrary }
)(LibraryItem);
