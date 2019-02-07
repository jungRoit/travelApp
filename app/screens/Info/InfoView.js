import React from 'react';
import {View, Text} from 'react-native';
import InfoHeader from '../../components/InfoHeader/InfoHeader';

export default class InfoView extends React.Component {
  static navigationOptions= ({navigation}) => {
   return {
    header: props => <InfoHeader place= {navigation.getParam('place')} {...props} />,
    headerStyle: {
      backgroundColor: "transparent"
    }
   }
  }

  render() {
    console.log(this.props);
    return (
      <View>
        <Text>Info of {this.props.navigation.getParam('place').title}</Text>
      </View>
    )
  }
}