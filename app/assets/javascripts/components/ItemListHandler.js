import React from 'react/addons';
import connectToStores from 'flummox/connect';

import ItemList from './ItemList';

class ItemListHandler extends React.Component {
  render() {
    return (
      <ItemList {...this.props} />
    );
  }
}

ItemListHandler = connectToStores(ItemListHandler, {
  items: store => ({
    items: store.getAllItems()
  })
})

export default ItemListHandler;
