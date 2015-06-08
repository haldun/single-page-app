import { Store } from 'flummox';
import { Map } from 'immutable';

import Immutable from 'immutable';

window.Immutable = Immutable;

export default class ItemStore extends Store {
  constructor(flux) {
    super();
    let actionIds = flux.getActionIds('app');
    this.register(actionIds.getAllItems, this.handleReceiveItems);
    this.register(actionIds.createNewItem, this.handleCreateNewItem);
    this.state = {
      items: new Map()
    };
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

  handleCreateNewItem() {
    this.setState({ items: this.state.items.concat([{id: 234, text: "yeni item"}]) });
  }

  getAllItems() {
    window.hede = this.state.items;
    return this.state.items.valueSeq().toJS();
  }

  getItem(id) {
    return this.state.items.get(id).toJS();
  }
}
