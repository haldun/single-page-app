import { Store } from 'flummox';

export default class ItemStore extends Store {
  constructor(flux) {
    super();
    let actionIds = flux.getActionIds('app');
    this.register(actionIds.receiveItems, this.handleReceiveItems);
    this.register(actionIds.createNewItem, this.handleCreateNewItem);
    this.state = {
      items: []
    };
  }

  handleReceiveItems(newItems) {
    this.setState({ items: newItems });
  }

  handleCreateNewItem() {
    this.setState({ items: this.state.items.concat([{id: 234, text: "yeni item"}]) });
  }

  getAllItems() {
    return this.state.items;
  }

  getItem(id) {
    return this.state.items[0];
  }
}
