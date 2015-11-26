import React from 'react';
import axios from 'axios';
import reflux from 'reflux';
import immutable from 'immutable';

import './content.styl';

const actions = reflux.createActions([
  'updateList'
]);

const store = reflux.createStore({
  listenables: [actions],

  list: immutable.List(),

  onUpdateList: function(list) {
    this.list = immutable.List(list);
    this.trigger(this.list);
  }
});

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { list: store.list };
    this.onListChange = this.onListChange.bind(this);
  }

  onListChange(list) {
    this.setState({ list: list });
  }

  componentWillMount() {
    this.unsubscribe = store.listen(this.onListChange);

    axios.get('http://localhost:3001/api/list').then(response => {
      actions.updateList(response.data);

    }).catch(function(response) {
      if (NODE_ENV === 'development')
        console.log(response);
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <div className="content">
        <h2>Content</h2>

        <ul>{ this.state.list.map(item => {
          return (
            <li key={ item.id }>
              <a href={ `?id=${item.id}` }>{ item.title }</a>
            </li>
          );
        })}</ul>
      </div>
    );
  }
}
