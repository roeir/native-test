import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export default ComposedComponent => {
  class AuthenticatedGuard extends Component {
    static navigationOptions = ComposedComponent.navigationOptions;
    static propTypes = {
      isAuthenticated: PropTypes.bool,
    };

    componentWillMount() {
      const { navigate } = this.props.navigation;
      if (this.props.isAuthenticated) {
        navigate('Test');
      }
    }

    render() {
      return (
        <ComposedComponent {...this.props} />
      )
    }
  }

  const mapStateToProps = state => ({
    isAuthenticated: !!state.auth.user,
  });

  return connect(
    mapStateToProps,
  )(AuthenticatedGuard);
}