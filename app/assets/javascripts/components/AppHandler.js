import React from 'react/addons';
import { RouteHandler } from 'react-router';

export default class AppHandler extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="container">
        <h1>App</h1>
        <RouteHandler {...this.props} key={this.props.pathname} />
      </div>
    );
  }
}
