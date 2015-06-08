import React from 'react/addons';
import { Link } from 'react-router';

export default class Item extends React.Component {
  render() {
    console.log("Item", this.props);
    return <li>
      <Link to="itemDetail" params={{ id: this.props.item.id }}>
        {this.props.item.title}
      </Link>
    </li>;
  }
}
