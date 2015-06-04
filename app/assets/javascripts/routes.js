import React from 'react';
import Router from 'react-router';
import { Route, Redirect, DefaultRoute } from 'react-router';

import AppHandler from './components/AppHandler';
import ItemListHandler from './components/ItemListHandler';
import ItemDetailHandler from './components/ItemDetailHandler';

export default (
  <Route handler={AppHandler}>
    <DefaultRoute handler={ItemListHandler}/>
    <Route path="items/:id" name="itemDetail" handler={ItemDetailHandler}/>
  </Route>
);
