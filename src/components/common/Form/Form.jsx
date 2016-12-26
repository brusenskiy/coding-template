import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import Tabs from 'material-ui/Tabs/Tabs';
// import Tab from 'material-ui/Tabs/Tab';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import Element from './Element/Element';
import Button from './Button';


class Form extends Component {
  static propTypes = {
    groups: PropTypes.arrayOf(PropTypes.object),
    buttons: PropTypes.arrayOf(PropTypes.object),
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

    const buttons = this.props.buttons.map((b, i) =>
      <Button key={i} {...b} />);

    return (
      <MuiThemeProvider><form method="post">
        {items}
        <br /><br />
        {buttons}
      </form></MuiThemeProvider>
    );
  }
}

export default Form;
