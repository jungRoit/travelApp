import { createStackNavigator, createAppContainer } from 'react-navigation';
import React from 'react';

import HomeView from '../screens/Home';
import InfoView from '../screens/Info';

import HomeHeader from '../components/HomeHeader';
import InfoHeader from '../components/InfoHeader/InfoHeader';


const Navigator = createStackNavigator({
  Home: {
    screen: HomeView,
    
  },
  Info: {
    screen: InfoView,
  }
},
  {
    initialRouteName: 'Home'
  }
);

const AppNavigator = createAppContainer(Navigator);

export default AppNavigator;
