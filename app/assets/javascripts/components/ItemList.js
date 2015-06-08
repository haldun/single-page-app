import React from 'react/addons';
import Item from './Item';

export default class ItemList extends React.Component {
  render() {
    console.log(this.props.items);

    let itemNodes = this.props.items.map((item, index) => {
      return <Item key={index} item={item} />
    });
    return (
      <div>
        <ul>
          {itemNodes}
        </ul>
        <button onClick={this.handleAddItem.bind(this)}>Add Item</button>
        <button onClick={this.handleFetchItem.bind(this)}>Fetch Items</button>
      </div>
    );
  }

  handleAddItem(e) {
    e.preventDefault();
    this.props.flux.getActions('app').createNewItem();
  }

  handleFetchItem(e) {
    e.preventDefault();
    this.props.flux.getActions('app').getAllItems();
  }
}
