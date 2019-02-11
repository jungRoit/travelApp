import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';

import Places from '../../components/Places/Places';
import HomeHeader from '../../components/HomeHeader';

import data from './data';



export default class HomeView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      places: data || this.fetchData()
    }
  }

  static navigationOptions = {
    header: props => <HomeHeader {...props} />,
    headerStyle: {
      backgroundColor: "transparent"
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