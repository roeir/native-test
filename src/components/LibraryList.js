import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';

import LibraryItem from './LibraryItem';

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});

class LibraryList extends Component {
  static propTypes = {
    libraries: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
  };

  render() {
    return (
      <View style={styles.listContainer}>
        <FlatList
          data={this.props.libraries}
          keyExtractor={item => item.id}
          renderItem={({ item }) =>
            <LibraryItem {...item} />
          }
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  libraries: state.libraries
});

export default connect(
  mapStateToProps,
  null,
)(LibraryList);
