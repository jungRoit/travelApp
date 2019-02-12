import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';

import Places from '../../components/Places/Places';
import HomeHeader from '../../components/HomeHeader';

import images from '../../config/images';

const places = [
  {
    key: '1',
    numberOfThings: 10,
    title: 'Boudha',
    image: images.boudha,
    info: {
      location: 'Boudha, Kathmandu, Nepal',
      contact: '9804323432',
      openingTime: '10:00 AM',
      website: 'roadhouse.com',
      details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint`,
      image: images.roadhouse
    },
    pictures: [
      {
        key='1',
        date: 'Saturday-9th February',
        images: [images.roadhouse1, images.roadhouse2, images.roadhouse3,images.roadhouse5, images.roadhouse6, images.roadhouse4]
      },
      {
        key='2',
        date: 'Friday-8th February',
        images: [images.roadhouse5, images.roadhouse6, images.roadhouse4]
      }
    ]
  },
  {
    key: '2',
    numberOfThings: 21,
    title: 'Chitwan',
    image: images.chitwan,
    info: {
      location: 'Boudha, Kathmandu, Nepal',
      contact: '9804323432',
      openingTime: '10:00 AM',
      website: 'roadhouse.com',
      details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint`,
      image: images.roadhouse
    },
    pictures: [
      {
        key='1',
        date: 'Saturday-9th February',
        images: [images.roadhouse1, images.roadhouse2, images.roadhouse3,images.roadhouse5, images.roadhouse6, images.roadhouse4]
      },
      {
        key='2',
        date: 'Friday-8th February',
        images: [images.roadhouse5, images.roadhouse6, images.roadhouse4]
      }
    ]
  },
  {
    key: '3',
    numberOfThings: 13,
    title: 'Patan',
    image: images.patan,
    info: {
      location: 'Boudha, Kathmandu, Nepal',
      contact: '9804323432',
      openingTime: '10:00 AM',
      website: 'roadhouse.com',
      details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint`,
      image: images.roadhouse
    },
    pictures: [
      {
        key='1',
        date: 'Saturday-9th February',
        images: [images.roadhouse1, images.roadhouse2, images.roadhouse3,images.roadhouse5, images.roadhouse6, images.roadhouse4]
      },
      {
        key='2',
        date: 'Friday-8th February',
        images: [images.roadhouse5, images.roadhouse6, images.roadhouse4]
      }
    ]
  },
  {
    key: '4',
    numberOfThings: 8,
    title: 'Basantapur',
    image: images.basantapur,
    info: {
      location: 'Boudha, Kathmandu, Nepal',
      contact: '9804323432',
      openingTime: '10:00 AM',
      website: 'roadhouse.com',
      details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint`,
      image: images.roadhouse
    },
    pictures: [
      {
        key='1',
        date: 'Saturday-9th February',
        images: [images.roadhouse1, images.roadhouse2, images.roadhouse3,images.roadhouse5, images.roadhouse6, images.roadhouse4]
      },
      {
        key='2',
        date: 'Friday-8th February',
        images: [images.roadhouse5, images.roadhouse6, images.roadhouse4]
      }
    ]
  }
]

export default class HomeView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      places: places || this.fetchData()
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