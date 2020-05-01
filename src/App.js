import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createAppContainer } from 'react-navigation';

import store from './store';
import { isSignedIn } from './services/auth';

import createRootNavigator from './routes';


class App extends Component {
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
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

export default App;
