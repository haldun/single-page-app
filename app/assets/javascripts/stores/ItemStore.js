import { Store } from 'flummox';
import { Map } from 'immutable';

/**
 * Item Store
 */
export default class ItemStore extends Store {
  constructor(flux) {
    super();
    let actionIds = flux.getActionIds('app');
    this.register(actionIds.getAllItems, this.handleReceiveItems);
    this.register(actionIds.getItemDetail, this.handleReceiveItem);
    this.register(actionIds.createNewItem, this.handleCreateNewItem);
    this.state = {
      items: new Map()
    };
  }

  handleReceiveItem(item) {
    console.log("new item loaded ", item);
    const newItems = {
      [item.id]: item
    };
    this.setState({
      items: this.state.items.merge(newItems)
    })
  }

  handleReceiveItems(newItems) {
    const items = newItems.reduce((result, item) => {
      result[item.id] = item;
      return result;
    }, {});
    this.setState({
      items: this.state.items.merge(items)
    });
  }

  handleCreateNewItem(title) {
    console.log("handleCreateNewItem: ", title);
    const newItem = {
      id: new Date().getTime(),
      title: title
    };
    const items = {
      [newItem.id]: newItem
    };
    console.log(items);
    this.setState({
      items: this.state.items.merge(items)
    });
  }

  getAllItems() {
    return this.state.items.valueSeq().toJS();
  }

  getItem(id) {
    let item = this.state.items.get(id);

    if (!item) {
      return undefined;
    }

    return item.toJS();
  }
}
