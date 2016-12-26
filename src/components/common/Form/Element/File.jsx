import React, { Component, PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';


class File extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
//     value: PropTypes.string,
  };

  render() {
//     const { name, value, title } = this.props;
    const { name, title } = this.props;

    return (
      <div>
        <FlatButton label={title} labelPosition="before">
          <input
            name={name}
            type="file"
            style={{
              cursor: 'pointer',
              position: 'absolute',
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              width: '100%',
              opacity: 0,
            }}
          />
        </FlatButton>
      </div>
    );
  }
}

export default File;
