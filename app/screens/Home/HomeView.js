import React from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';

import Places from '../../components/Places/Places';

import data from './data';

import styles from './styles';

import { Icon } from 'react-native-elements';

export default class HomeView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      places: {}
    };
  }

  componentDidMount() {
    const places = data || this.fetchData();
    this.setState({ places });
  }

  static navigationOptions = ({ navigation }) => ({
    title: 'Discover',
    headerLeft: (
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Icon
          name="list"
          size={30}
          color="white"
          containerStyle={styles.headerLeft}
        />
      </TouchableOpacity>
    ),
    headerStyle: {
      backgroundColor: '#E07E5B'
    },
    headerRight: (
      <Icon
        name="search"
        size={30}
        color="white"
        containerStyle={styles.headerRight}
      />
    ),
    headerTitleStyle: {
      color: 'white',
      textAlign: 'center',
      flex: 1
    }
  });

  render() {
    return (
      <View>
        <FlatList
          data={this.state.places}
          renderItem={({ item }) => (
            <Places place={item} onPress={this.placePressed} />
          )}
        />
      </View>
    );
  }

  placePressed = place => {
    this.props.navigation.navigate('Place', { place: place });
  };
  fetchData = () => {};
}
