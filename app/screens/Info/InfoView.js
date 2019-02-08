import React from 'react';
import { View, Text, ScrollView, Image, } from 'react-native';

import styles from './styles';

import images from '../../config/images';

import Navbar from '../../components/Navbar';
import InfoHeader from '../../components/InfoHeader/InfoHeader';

export default class InfoView extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Discover',
      headerStyle: {
        backgroundColor: "transparent",
      },
      headerTintColor: 'white',
      headerBackground: (
        <InfoHeader place={navigation.getParam('place')} />
      )
    }
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <Navbar />
        <ScrollView style={styles.infoWrapper}>
          <View style={styles.infoBox}>

            <View style={styles.infoItem}>
              <View style={styles.iconBox}>
                <Image source={images.location} />
              </View>
              <View style={styles.iconContent}>
                <Text>{this.props.navigation.getParam('place').info.location}</Text>
              </View>
            </View>

            <View style={styles.infoItem}>
              <View style={styles.iconBox}>
                <Image source={images.contact} />
              </View>
              <View style={styles.iconContent}>
                <Text>Call {this.props.navigation.getParam('place').info.contact}</Text>
              </View>
            </View>

            <View style={styles.infoItem}>
              <View style={styles.iconBox}>
                <Image source={images.openAt} />
              </View>
              <View style={styles.iconContent}>
                <Text>Opens at: {this.props.navigation.getParam('place').info.openingTime}</Text>
              </View>
            </View>

            <View style={styles.infoItem}>
              <View style={styles.iconBox}>
                <Image source={images.website} />
              </View>
              <View style={styles.iconContent}>
                <Text>{this.props.navigation.getParam('place').info.website}</Text>
              </View>
            </View>


          </View>
          <View style={styles.detailsBox}>
            <Text>{this.props.navigation.getParam('place').info.details}</Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}