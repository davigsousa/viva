import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

import SignIn from './pages/SignIn';
import SelectType from './pages/SelectType';
import Feed from './pages/Feed';

import logo from '../assets/logo.png';

const signedOutRoutes = createStackNavigator({
  SignIn,
  SelectType,
}, {
  headerMode: 'none',
  mode: 'modal',
  initialRouteName: 'SignIn',
  navigationOptions: {
    gestureEnabled: false,
  },
});

const signedInRoutes = createStackNavigator(
  { Feed },
  {
    defaultNavigationOptions: {
      headerTitle: () => <Image source={logo} />,
      headerStyle: {
        backgroundColor: '#f5f5f5',
      },
      headerTitleAlign: 'center',
    },
  },
);

const createRootNavigation = (signedIn = false) => createStackNavigator({
  SignedIn: { screen: signedInRoutes },
  SignedOut: { screen: signedOutRoutes },
}, {
  headerMode: 'none',
  mode: 'modal',
  initialRouteName: signedIn ? 'SignedIn' : 'SignedOut',
  navigationOptions: {
    gesturesEnabled: false,
  },
});

export default createRootNavigation;
