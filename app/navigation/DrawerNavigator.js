import {createDrawerNavigator, createAppContainer} from 'react-navigation';

import TabNavigator from './TabNavigator';
import ProfileView from '../screens/Profile';
import FavoritesView from '../screens/Favorites';

const DrawerNavigator = createDrawerNavigator({
  Home: {
    screen: TabNavigator,
    navigationOptions: {
      drawerLabel: 'Home'
    }
  },
  Profile: {
    screen: ProfileView,
    navigationOptions: {
      drawerLabel: 'My Profile'
    }
  },
  Favorites: {
    screen: FavoritesView,
    navigationOptions: {
      drawerLabel: 'My Favorites'
    }
  }

})

const AppNavigator = createAppContainer(DrawerNavigator);

export default AppNavigator;