import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { FeedStack, ExploreStack } from './stacks';

import SignIn from './pages/SignIn';
import Home from './pages/Home';

import perfil from '../assets/IconePerfil.png';
import home from '../assets/IconeHome.png';
import lupa from '../assets/IconeLupa.png';


const imageStyle = {
  width: 30,
  height: 30,
  alignSelf: 'center',
  marginBottom: 10,
};

const signedInRoutes = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: <Image source={perfil} style={imageStyle} />,
    },
  },
  Feed: {
    screen: FeedStack,
    navigationOptions: {
      tabBarLabel: <Image source={home} style={imageStyle} />,
    },
  },
  Explore: {
    screen: ExploreStack,
    navigationOptions: {
      tabBarLabel: <Image source={lupa} style={imageStyle} />,
    },
  },
}, { initialRouteName: 'Feed' });

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
  initialRouteName: signedIn ? 'SignedIn' : 'SignedOut',
  navigationOptions: {
    gesturesEnabled: false,
  },
});

export default createRootNavigation;
