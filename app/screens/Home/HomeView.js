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
      details: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem'+
                'accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab'+
                'illo inventore veritatis et quasi architecto beatae vitae dicta sunt'+
                'explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur '+
                'aut odit aut fugit, sed quia consequuntur magni dolores eos qui '+
                'nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut ',
      image: images.roadhouse
    }
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
      details: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem'+
                'accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab'+
                'illo inventore veritatis et quasi architecto beatae vitae dicta sunt'+
                'explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur '+
                'aut odit aut fugit, sed quia consequuntur magni dolores eos qui '+
                'nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut ',
      image: images.roadhouse
    }
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
      details: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem'+
                'accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab'+
                'illo inventore veritatis et quasi architecto beatae vitae dicta sunt'+
                'explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur '+
                'aut odit aut fugit, sed quia consequuntur magni dolores eos qui '+
                'nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut ',
      image: images.roadhouse
    }
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
      details: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem'+
                'accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab'+
                'illo inventore veritatis et quasi architecto beatae vitae dicta sunt'+
                'explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur '+
                'aut odit aut fugit, sed quia consequuntur magni dolores eos qui '+
                'nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut ',
      image: images.roadhouse
    }
  }
]

export default class HomeView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      places: places || this.fetchData()
    }
  }

  static navigationOptions= {
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
    this.props.navigation.navigate('Info', { place: place });
  }
  fetchData = () => {

  }

}