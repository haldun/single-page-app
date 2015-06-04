import React from 'react/addons';

export default class Item extends React.Component {
  render() {
    return <li>{this.props.item}</li>;
  }
}
