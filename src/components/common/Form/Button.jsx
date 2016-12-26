import React, { Component, PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';


class Button extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    type: PropTypes.string,
  };

  render() {
    const { title, type } = this.props;

    return (
      <RaisedButton
        label={title}
        primary={type === 'submit'}
        style={{
          marginRight: 20,
        }}
        type="submit"
      />
    );
  }
}

export default Button;
