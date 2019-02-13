import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeView from '../screens/Home';
import PlaceView from '../screens/Place';
import PlaceHeader from '../components/PlaceHeader';


const Navigator = createStackNavigator({
  Home: {
    screen: HomeView,
  },
  Place: {
    screen: PlaceView
}
},
  {
    initialRouteName: 'Home'
  }
);

const AppNavigator = createAppContainer(Navigator);

export default AppNavigator;
