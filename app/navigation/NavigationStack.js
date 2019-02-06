import {createStackNavigator, createAppNavigator} from 'react-navigation';
import HomeView from '../screens/Home';

const Navigator = createStackNavigator({
  Home: {
    screen: HomeView
  }
});

const AppNavigator = createAppNavigator(Navigator);

export default AppNavigator;
