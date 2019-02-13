import React from 'react';
import { View, Text } from 'react-native';

import Info from '../../components/Info';
import Navbar from '../../components/Navbar';
import Pictures from '../../components/Pictures';
import Reviews from '../../components/Reviews';
import PlaceHeader from '../../components/PlaceHeader';



export default class PlaceView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'Info',
      place: {}
    }
  }

  componentWillMount() {
    const {navigation } = this.props;

    const place = navigation.getParam('place',{});
    this.setState({place});
  }

  

  render() {
    const view = this.getView(this.state.activeTab);
    return (
      <View>
        <PlaceHeader place={this.props.navigation.getParam('place',{})} />
        <Navbar selectedTab={this.toggleView} list= {[1,2,3]} />
        {view}

      </View>
    )
  }

  getView = (activeTab)  => {
    const data=this.state.place;

    if(activeTab === 'Info') {
      return <Info place={data.info} />

    } else if(activeTab==='Pictures') {
      return <Pictures place={data.pictures} />

    } else if(activeTab==='Reviews'){
      return <Reviews place={data.reviews} />

    } else {
      return null;
    }
  }

  toggleView = (activeTab) => {
    this.setState({ activeTab: activeTab });
  }
}