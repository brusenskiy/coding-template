import React, { Component, PropTypes } from 'react';
import Toggle from 'material-ui/Toggle';


class Boolean extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    value: PropTypes.string,
  };

  render() {
    const { name, value, title } = this.props;

    const styles = {
      block: {
        marginTop: 30,
      },
    };

    return (
      <div style={styles.block}>
        <Toggle
          name={name}
          label={title}
          defaultToggled
          labelPosition="right"
        />
      </div>
    );
  }
}

export default Boolean;
