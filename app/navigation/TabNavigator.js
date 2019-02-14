import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import FavoritesView from '../screens/Favorites';
import StarredView from '../screens/Starred';
import ProfileView from '../screens/Profile';

import Navigator from './NavigationStack';

const TabNavigator = createMaterialTopTabNavigator(
  {
    Home: {
      screen: Navigator,
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          return (
            <Icon name="home" size={20} color={focused ? tintColor : 'black'} />
          );
        }
      }
    },
    Favorites: {
      screen: FavoritesView,
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          return (
            <Icon
              name="heart"
              size={20}
              color={focused ? tintColor : 'black'}
            />
          );
        }
      }
    },
    Starred: {
      screen: StarredView,
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          return (
            <Icon name="star" size={20} color={focused ? tintColor : 'black'} />
          );
        }
      }
    },
    Profile: {
      screen: ProfileView,
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          return (
            <Icon name="user" size={20} color={focused ? tintColor : 'black'} />
          );
        }
      }
    }
  },
  {
    tabBarPosition: 'bottom',
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      style: {
        backgroundColor: 'white'
      },
      activeTintColor: 'brown',
      tintColor: 'black'
    }
  }
);

export default TabNavigator;
