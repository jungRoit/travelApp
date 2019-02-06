import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import styles from './styles';
import menuPic from '../../assets/img/menu.png';
import searchPic from '../../assets/img/search.png';
import Places from '../../components/places/Places';
import boudha from '../../assets/img/boudha.jpeg';
import patan from '../../assets/img/patan.jpeg';
import basantapur from '../../assets/img/basantapur.jpeg';
import chitwan from '../../assets/img/chitwan.jpeg';

export default class HomeView extends React.Component {

  render() {
    return (
      <View style={{flex:1}}>
        <View style={styles.header}>

          <View style={styles.menuBox}>
            <Image style={styles.menuIcon} source={menuPic} />
          </View>

          <View style={styles.titleBox}>
            <Text style={styles.title}>Discover</Text>
          </View>

          <View style={styles.searchBox}>
            <Image style={styles.menuIcon} source={searchPic} />
          </View>

        </View>
        <View style={{flex:6}}>
        <ScrollView style={{flexGrow:1}}>
        <Places
          numberOfThings = {10}
          place = 'Boudha'
          image = {boudha}
        />
        <Places
          numberOfThings = {22}
          place = 'Patan'
          image = {patan}
        /><Places
        numberOfThings = {18}
        place = 'Chitwan'
        image = {chitwan}
      /><Places
      numberOfThings = {7}
      place = 'Basantapur'
      image = {basantapur}
    />
      
        </ScrollView>
        </View>
       
      </View>
    )
  }
}