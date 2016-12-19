import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import Tabs from 'material-ui/Tabs/Tabs';
// import Tab from 'material-ui/Tabs/Tab';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import Element from './Element/Element';


class Form extends Component {
  static propTypes = {
    groups: PropTypes.arrayOf(PropTypes.object),
  };

  render() {
    const items = this.props.groups.map((g, i) => (
      <Card key={i} initiallyExpanded={i === 0}>
        <CardHeader title={g.title} actAsExpander showExpandableButton />
        <CardText expandable>{
          g.elements.map((e, j) => <Element key={j} params={e} />)
        }</CardText>
      </Card>
    ));

    return (
      <MuiThemeProvider><div>{items}</div></MuiThemeProvider>
    );
  }
}

export default Form;
