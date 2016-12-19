import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';


class Text extends Component {
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
        multiLine
        rows={1}
        rowsMax={10}
      />
    );
  }
}

export default Text;
