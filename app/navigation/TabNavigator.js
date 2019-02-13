import React from 'react';
import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';
import { Icon } from 'react-native-elements';
import {Image} from 'react-native';

import Navigator from './NavigationStack';
import images from '../config/images';

const TabNavigator = createMaterialTopTabNavigator({
  Home: {
    screen: Navigator,
    navigationOptions: {
      tabBarIcon: ({focused,tintColor}) => {
        return <Icon name='home' size={30} color={(focused)? tintColor:'black'} />
    }
    }

  },
  // Favorites: {
  //   screen: Navigator,
  //   navigationOptions: {
  //     title: 'Favorites'
  //   }
  // },
  // Stared: Navigator,
  // Profile: Navigator,

},
  {
    tabBarPosition: 'bottom',
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      style: {
        backgroundColor: 'white',
      },
      activeTintColor: 'brown',
      tintColor:'brown'
    }
  }

);

const AppNavigator = createAppContainer(TabNavigator);

export default AppNavigator;