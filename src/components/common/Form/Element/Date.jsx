import React, { Component, PropTypes } from 'react';
import DatePicker from 'material-ui/DatePicker';


class Date extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    value: PropTypes.string,
    noLabel: PropTypes.bool,
  };

  render() {
    const { name, value, title, noLabel } = this.props;

    return (
      <DatePicker
        defaultDate={value}
        name={name}
        autoOk
        floatingLabelText={!noLabel && title}
      />
    );
  }
}

export default Date;
