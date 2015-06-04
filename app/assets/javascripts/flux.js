import { Flummox } from 'flummox';
import AppActions from './actions/AppActions';
import ItemStore from './stores/ItemStore';

export default class Flux extends Flummox {
  constructor() {
    super();

    this.createActions('app', AppActions);
    this.createStore('items', ItemStore, this);
  }
}
