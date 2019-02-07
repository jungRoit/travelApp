import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';

import Places from '../../components/Places/Places';

import images from '../../config/images';

const places = [
  {
    key: '1',
    numberOfThings: 10,
    title: 'Boudha',
    image: images.boudha,
    info: {
      
    }
  },
  {
    key: '2',
    numberOfThings: 21,
    title: 'Chitwan',
    image: images.chitwan
  },
  {
    key: '3',
    numberOfThings: 13,
    title: 'Patan',
    image: images.patan
  },
  {
    key: '4',
    numberOfThings: 8,
    title: 'Basantapur',
    image: images.basantapur
  }
]

export default class HomeView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      places: places || this.fetchData()
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
    this.props.navigation.navigate('Info', { place: place });
  }
  fetchData = () => {

  }

}