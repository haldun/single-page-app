import React from 'react';
import Router from 'react-router';
import {Link} from 'react-router';

let RouteHandler = Router.RouteHandler;

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>App</h1>
        <NavigationBar />
        <RouteHandler />
      </div>
    );
  }
}

class NavigationBar extends React.Component {
  render() {
    return (
      <ul className="nav nav-pills nav-stacked">
        <NavigationLink to="about">The first link</NavigationLink>
      </ul>
    );
  }
}

class NavigationLink extends React.Component {
  render() {
    return (
      <li><Link {...this.props}>{this.props.children}</Link></li>
    );
  }
}

class About extends React.Component {
  render() {
    return (
      <div>About</div>
    );
  }
}

class Product extends React.Component {
  render() {
    return (
      <div>Product {this.props}</div>
    );
  }
}

let Route = Router.Route;
const routes = (
  <Route handler={App}>
    <Route path="about" name="about" handler={About}/>
    <Route path="products/:id" name="product" handler={Product}/>
  </Route>
);

Router.run(routes, Router.HashLocation, (Root) => {
  React.render(<Root />, document.body);
});
