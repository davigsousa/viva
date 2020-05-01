import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import SignIn from './pages/SignIn';
import Feed from './pages/Feed';
import Home from './pages/Home';
import Explore from './pages/Explore';

import posts from '../assets/IconePosts.png';
import home from '../assets/IconeHome.png';
import carrinho from '../assets/IconeCarrinho.png';


const FeedStack = createStackNavigator({
  Feed,
});

const imageStyle = {
  width: 30,
  height: 30,
  alignSelf: 'center',
  marginBottom: 10,
};

const signedInRoutes = createBottomTabNavigator({
  Feed: {
    screen: Feed,
    navigationOptions: {
      tabBarLabel: <Image source={posts} style={imageStyle} />,
    },
  },
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: <Image source={home} style={imageStyle} />,
    },
  },
  Explore: {
    screen: Explore,
    navigationOptions: {
      tabBarLabel: <Image source={carrinho} style={imageStyle} />,
    },
  },
});

const signedOutRoutes = createStackNavigator({
  SignIn,
}, {
  headerMode: 'none',
  mode: 'modal',
  initialRouteName: 'SignIn',
  navigationOptions: {
    gestureEnabled: false,
  },
});

const createRootNavigation = (signedIn = false) => createStackNavigator({
  SignedIn: { screen: signedInRoutes },
  SignedOut: { screen: signedOutRoutes },
}, {
  headerMode: 'none',
  mode: 'modal',
  initialRouteName: signedIn ? 'SignedOut' : 'SignedIn',
  navigationOptions: {
    gesturesEnabled: false,
  },
});

export default createRootNavigation;
