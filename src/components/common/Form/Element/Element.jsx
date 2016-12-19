import React, { Component, PropTypes } from 'react';
import String from './String';
import Text from './Text';
import Select from './Select';
import Number from './Number';
import Boolean from './Boolean';
import Date from './Date';
import Time from './Time';
import DateTime from './DateTime';
import File from './File';


class Element extends Component {
  static propTypes = {
    params: PropTypes.shape({
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  };

  render() {
    const { params } = this.props;

    switch (params.type) {
      case 'string': {
        return <String {...params} />;
      }

      case 'number': {
        return <Number {...params} />;
      }

      case 'text': {
        return <Text {...params} />;
      }

      case 'boolean': {
        return <Boolean {...params} />;
      }

      case 'date': {
        return <Date {...params} />;
      }

      case 'time': {
        return <Time {...params} />;
      }

      case 'datetime': {
        return <DateTime {...params} />;
      }

      case 'select': {
        return <Select {...params} />;
      }

      case 'multi-select': {
        return <Select {...params} />;
      }

      case 'multi-select-with-adding': {
        return <Select {...params} />;
      }

      case 'image': {
        return <File {...params} />;
      }

      default: {
        console.warn(`An unknown element type "${params.type}"`);
        return null;
      }
    }
  }
}

export default Element;
