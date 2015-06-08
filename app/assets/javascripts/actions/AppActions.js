import { Actions } from 'flummox';
import { siteUrl } from '../utils/UrlUtils';

export default class AppActions extends Actions {
  async getAllItems() {
    let response;
    try {
      const url = siteUrl('/items.json');
      response = await fetch(url)
      return await response.json();
    } catch (error) {
      // TODO what to do?
      const url = siteUrl('/items.json');
      response = await fetch(url)
      return await response.json();
    }
  }

  createNewItem() {
    return true;
  }
}
