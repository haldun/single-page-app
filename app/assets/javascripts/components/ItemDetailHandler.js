import React from 'react/addons';
import Flux from 'flummox/component';
import Item from './Item';

export default class ItemDetailHandler extends React.Component {

  static willTransitionTo(transition, params) {
    console.log("Item detail handler", transition, params);
  }

  static async routerWillRun({ flux, state }) {
    const appActions = flux.getActions('app');
    // TODO Get id
    return await appActions.getAllItems();
  }

  render() {
    console.log("ItemDetailHandler");
    return (
      <div>
        <Flux
          connectToStores={{
            items: (store, props) => ({
              item: store.getItem(this.props.params.id)
            })
          }}
          render={({ item }) => <Item item={item} />}
        />
      </div>
    );
  }
}
