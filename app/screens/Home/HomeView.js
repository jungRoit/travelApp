import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';

import Places from '../../components/Places/Places';

import data from './data';

import images from '../../config/images';

import styles from './styles';

import {Icon} from 'react-native-elements';



export default class HomeView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      places: data || this.fetchData()
    }
  }

  static navigationOptions = {
    title: 'Discover',
    headerLeft: <Icon name='list' size={30} color= 'white'  containerStyle={styles.headerLeft} />,
    headerStyle: {
      backgroundColor: "#E07E5B"
    },
    headerRight: <Icon name='search' size={30} color= 'white' containerStyle={styles.headerRight} />,
    headerTitleStyle: {
      color: 'white',
      textAlign: 'center',
      flex: 1,
    }
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.state.places}
          renderItem={({ item }) => <Places
            place={item}
            onPress={this.placePressed}
          />}
        />
      </View>
    )
  }

  placePressed = (place) => {
    this.props.navigation.navigate('Place', { place: place });
  }
  fetchData = () => {

  }

}