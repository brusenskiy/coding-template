import React, { Component } from 'react';
import Date from './Date';
import Time from './Time';


class DateTime extends Component {
  render() {
    return (
      <div>
        <div style={{ width: '50%', float: 'left' }}>
          <Date {...this.props} />
        </div>
        <div style={{ width: '50%', float: 'left' }}>
          <Time {...this.props} title="время" />
        </div>
      </div>
    );
  }
}

export default DateTime;
