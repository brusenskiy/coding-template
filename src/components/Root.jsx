import React, { PropTypes } from 'react';
import Component from './common/ShallowCompareComponent';
import { connect } from 'react-redux';
// @todo Consider https://www.npmjs.com/package/react-loader-advanced
import Loader from 'react-loader';
import * as Api from '../api';

class Wrapper extends Component {
  componentWillMount() {
    const { dispatch, loaded } = this.props;

    if (!loaded.has('list')) {
      Api.loadList(dispatch);
    }
  }

//  getLoader() {
//    const { spinner } = this.props;
//    if (!spinner) return null;
//
//    return <Loader loadedClassName="loader" options={{
//      length: 28,
//      width: 14,
//      radius: 42,
//      color: '#000000',
//      scale: 0.5,
//    }} />;
//  }

  render() {
    return (
      <Loader loaded={!this.props.spinner}>
        {this.props.children}
      </Loader>
    );
  }
}

Wrapper.propTypes = {
  children: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
  spinner: PropTypes.number.isRequired,
  loaded: PropTypes.object.isRequired,
};

export default connect((store) => ({
  spinner: store.api.get('spinner'),
  loaded: store.api.get('loaded'),
}))(Wrapper);
