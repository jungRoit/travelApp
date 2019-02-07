import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeView from '../screens/Home';
import InfoView from '../screens/Info';

const Navigator = createStackNavigator({
  Home: {
    screen: HomeView,
    // navigationOptions: tabBarVisible = false
  },
  Info: {
    screen: InfoView
  }
},
{
  initialRouteName: 'Home'
}
);

const AppNavigator = createAppContainer(Navigator);

export default AppNavigator;
