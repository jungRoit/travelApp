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
      activeTab: 'Info'
    }
  }

  

  render() {
    return (
      <View>
        <PlaceHeader place={this.props.navigation.getParam('place')} />
        <Navbar selectedTab={this.toggleView} />
        {(this.state.activeTab === 'Info')
          ? <Info place={this.props.navigation.getParam('place')} />
          : (this.state.activeTab === 'Pictures')
            ? <Pictures place={this.props.navigation.getParam('place')} />
            : <Reviews place={this.props.navigation.getParam('place')} />}

      </View>
    )
  }

  toggleView = (activeTab) => {
    this.setState({ activeTab: activeTab });
  }
}