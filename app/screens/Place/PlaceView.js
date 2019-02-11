import React from 'react';
import { View, Text } from 'react-native';

import PlaceHeader from '../../components/PlaceHeader';
import Navbar from '../../components/Navbar';
import Info from '../../components/Info';



export default class PlaceView extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activeTab: 'Info'
    }
  }

  render() {
    return (
      <View>
        <PlaceHeader place={this.props.navigation.getParam('place')} />
        <Navbar selectedTab={this.toggleView} />

        <Info place={this.props.navigation.getParam('place')} />
        <Pictures />
        <Reviews />

      </View>
    )
  }

  toggleView = (activeTab) => {
    this.setState({activeTab: activeTab });
  }
}