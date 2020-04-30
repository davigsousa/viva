import React, { Component } from 'react';

import { createAppContainer } from 'react-navigation';
import { isSignedIn } from './src/services/auth';

import createRootNavigator from './src/routes';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signed: false,
      signLoaded: false,
    };
  }

  componentDidMount() {
    isSignedIn()
      .then((res) => this.setState({ signed: res, signLoaded: true }));
  }

  render() {
    const { signed, signLoaded } = this.state;

    if (!signLoaded) return null;

    const Layout = createRootNavigator(signed);
    const Routes = createAppContainer(Layout);
    return <Routes />;
  }
}
