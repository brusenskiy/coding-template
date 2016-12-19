import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';


class Number extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    value: PropTypes.string,
  };

  render() {
    const { name, value, title } = this.props;

    return (
      <div>
        <TextField
          defaultValue={value}
          name={name}
          floatingLabelText={title}
          type="number"
          inputStyle={{ textAlign: 'right' }}
        />
      </div>
    );
  }
}

export default Number;
