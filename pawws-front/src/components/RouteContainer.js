import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import ErrorComponent from './common/ErrorComponent';
import Main from './screens/main';

export class RouteContainer extends ErrorComponent {
  shouldComponentUpdate(nextProps) {
    return this.props.location.pathname !== nextProps.location.pathname;
  }

  render() {
    return (
      <Switch>
        <Route exact path={'/'} component={Main} />
        <Redirect to={'/'} />
      </Switch>
    );
  }
}

export default withRouter(RouteContainer);
