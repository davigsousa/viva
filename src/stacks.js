import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

import Profile from './pages/Profile';
import Catalog from './pages/Catalog';
import Feed from './pages/Feed';
import Explore from './pages/Explore';

import logo from '../assets/logo.png';

export const ProfileStack = createStackNavigator({ Profile, Catalog }, {
  defaultNavigationOptions: {
    headerTitle: () => (
      <Image
        source={logo}
        resizeMode="contain"
        style={{ width: 100 }}
      />
    ),
    headerStyle: {
      backgroundColor: '#f5f5f5',
    },
    headerTitleAlign: 'center',
  },
});

export const ExploreStack = createStackNavigator({ Explore }, {
  defaultNavigationOptions: {
    headerTitle: () => (
      <Image
        source={logo}
        resizeMode="contain"
        style={{ width: 100 }}
      />
    ),
    headerStyle: {
      backgroundColor: '#f5f5f5',
    },
    headerTitleAlign: 'center',
  },
});

export const FeedStack = createStackNavigator({ Feed }, {
  defaultNavigationOptions: {
    headerTitle: () => (
      <Image
        source={logo}
        resizeMode="contain"
        style={{ width: 100 }}
      />
    ),
    headerStyle: {
      backgroundColor: '#f5f5f5',
    },
    headerTitleAlign: 'center',
  },
});
