import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';


class String extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    value: PropTypes.string,
    isDisabled: PropTypes.bool,
  };

  render() {
    const { name, value, title, isDisabled } = this.props;

    return (
      <div>
        <TextField
          defaultValue={value}
          name={name}
          floatingLabelText={title}
          fullWidth
          disabled={isDisabled}
        />
      </div>
    );
  }
}

export default String;
