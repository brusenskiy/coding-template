import React, { Component, PropTypes } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


class Text extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    value: PropTypes.string,

    options: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })),
  };

  componentWillMount() {
    this.setValue(this.props.value);
  }

  setValue(value) {
    this.setState({ value });
  }

  handleChange = (event, index, value) => this.setState({ value });

  render() {
    const { name, title, options } = this.props;

    return (
      <div>
        <SelectField
          name={name}
          value={this.state.value}
          floatingLabelText={title}
          autoWidth
          onChange={this.handleChange}
        >{
          options.map((item, i) =>
            <MenuItem key={i} value={item.value} primaryText={item.title} />)
        }</SelectField>
        <br />
      </div>
    );
  }
}

export default Text;
