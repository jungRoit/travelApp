import { createStackNavigator, createAppContainer } from 'react-navigation';
import React from 'react';
import HomeView from '../screens/Home';
import InfoView from '../screens/Info';
import HomeHeader from '../components/HomeHeader';


const Navigator = createStackNavigator({
  Home: {
    screen: HomeView,
    navigationOptions: {
      header: props => <HomeHeader {...props} />,
      headerStyle: {
        backgroundColor: "transparent"
      }
    }
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
