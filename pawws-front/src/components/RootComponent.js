import React from 'react';
import RouteContainer from './RouteContainer';
import ErrorComponent from './common/ErrorComponent';
import './RootComponent.scss';

export class RootComponent extends ErrorComponent {
  render() {
    return (
      <div id="root">
        <RouteContainer />
      </div>
    );
  }
}

export default RootComponent;
