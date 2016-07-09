import React, { PropTypes } from 'react';
import Component from '../common/ShallowCompareComponent';
import { connect } from 'react-redux';
import './content.scss';

class Content extends Component {
  render() {
    const { list } = this.props;

    return (
      <ul>{list.map((item, i) => (<li key={i}>{item.title}</li>))}</ul>
    );
  }
}

Content.propTypes = {
//  dispatch: PropTypes.func.isRequired,
  list: PropTypes.object.isRequired,
};

export default connect((store) => ({
//  dispatch: store.dispatch,
  list: store.api.get('list'),
}))(Content);
