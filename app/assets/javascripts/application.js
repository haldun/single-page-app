require('6to5/polyfill');

import FluxComponent from 'flummox/component';
import React from 'react/addons';
import Router from 'react-router';

import routes from './routes';
import Flux from './flux';
import performRouteHandlerStaticMethod from './utils/performRouteHandlerStaticMethod';

const flux = new Flux();
const router = Router.create({
  routes: routes,
  location: Router.HashLocation
});

// Render app
router.run(async (Handler, state) => {
  const routeHandlerInfo = { state, flux };

  await performRouteHandlerStaticMethod(state.routes, 'routerWillRun', routeHandlerInfo);

  React.render(
    <FluxComponent flux={flux}>
      <Handler {...state} />
    </FluxComponent>,
    document.body
  );
});
