import { Actions } from 'flummox';

export default class AppActions extends Actions {
  getAllItems() {
    return this.receiveItems([
      {
        id: 1,
        text: "item 1"
      },
      {
        id: 2,
        text: "item 2"
      },
      {
        id: 3,
        text: "item 3"
      }]);
  }

  receiveItems(items) {
    return items;
  }

  createNewItem() {
    return true;
  }
}
