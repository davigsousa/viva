import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { FeedStack, ExploreStack, ProfileStack } from './stacks';

import SignIn from './pages/SignIn';

import homeC from '../assets/iconesC/home.png';
import homeS from '../assets/iconesV/home.png';
import perfilC from '../assets/iconesC/perfil.png';
import perfilS from '../assets/iconesV/perfil.png';
import lupaC from '../assets/iconesC/lupa.png';
import lupaS from '../assets/iconesV/lupa.png';

import BarButton from './components/BarButton';


const signedInRoutes = createBottomTabNavigator({
  ProfileStack: {
    screen: ProfileStack,
    navigationOptions: {
      tabBarButtonComponent: (propsNav) => (
        <BarButton propsNav={propsNav} icon={perfilC} iconS={perfilS} />
      ),
    },
  },
  FeedStack: {
    screen: FeedStack,
    navigationOptions: {
      tabBarButtonComponent: (propsNav) => (
        <BarButton propsNav={propsNav} icon={homeC} iconS={homeS} />
      ),
    },
  },
  ExploreStack: {
    screen: ExploreStack,
    navigationOptions: {
      tabBarButtonComponent: (propsNav) => (
        <BarButton propsNav={propsNav} icon={lupaC} iconS={lupaS} />
      ),
    },
  },
}, { initialRouteName: 'FeedStack' });

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
