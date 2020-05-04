import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

import Profile from './pages/Profile';
import EditStore from './pages/EditStore';
import Catalog from './pages/Catalog';
import EditCatalog from './pages/EditCatalog';
import Feed from './pages/Feed';
import AddPost from './pages/AddPost';
import Explore from './pages/Explore';

import logo from '../assets/logo.png';


export const ProfileStack = createStackNavigator({
  Profile,
  Catalog,
  EditStore,
  EditCatalog,
}, {
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

export const FeedStack = createStackNavigator({
  Feed,
  AddPost: {
    screen: AddPost,
    navigationOptions: {
      headerLeft: () => null,
    },
  },
}, {
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
