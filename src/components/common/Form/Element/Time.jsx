import React, { Component, PropTypes } from 'react';
import TimePicker from 'material-ui/TimePicker';


class Time extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    value: PropTypes.string,
    noLabel: PropTypes.bool,
  };

  render() {
    const { name, value, title, noLabel } = this.props;

    return (
      <TimePicker
        defaultTime={value}
        format="24hr"
        name={name}
        autoOk
        floatingLabelText={!noLabel && title}
      />
    );
  }
}

export default Time;
