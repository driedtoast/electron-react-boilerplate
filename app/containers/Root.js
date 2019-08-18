// @flow
import React, { Component } from 'react';
import Routes from '../Routes';

export default class Root extends Component {
  render() {
    return (
      <Provider>
        <ConnectedRouter>
          <Routes />
        </ConnectedRouter>
      </Provider>
    );
  }
}
