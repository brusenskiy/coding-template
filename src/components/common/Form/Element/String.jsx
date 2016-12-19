import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';


class String extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    value: PropTypes.string,
  };

  render() {
    const { name, value, title } = this.props;

    return (
      <TextField
        defaultValue={value}
        name={name}
        floatingLabelText={title}
        fullWidth
      />
    );
  }
}

export default String;
