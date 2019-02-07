import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import styles from './styles';
import menuPic from '../../assets/img/menu.png';
import searchPic from '../../assets/img/search.png';
import Places from '../../components/places/Places';
import boudha from '../../assets/img/boudha.jpeg';
import patan from '../../assets/img/patan.jpeg';
import basantapur from '../../assets/img/basantapur.jpeg';
import chitwan from '../../assets/img/chitwan.jpeg';

export default class HomeView extends React.Component {

  placePressed = (place) => {
    this.props.navigation.navigate('Info', {place: place});
  }

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
          <FlatList
            data= {[
              {
                key:'1',
                nunberOfThings:10,
                place:'Boudha',
                image: boudha
              },
              {
                key:'2',
                nunberOfThings:21,
                place:'Chitwan',
                image: chitwan
              },
              {
                key:'3',
                nunberOfThings:13,
                place:'Patan',
                image: patan
              },
              {
                key:'4',
                nunberOfThings:8,
                place:'Basantapur',
                image: basantapur
              }
            ]}
            renderItem = {({item}) => <Places 
              numberOfThings={item.nunberOfThings} 
              place={item.place}
              image={item.image}
              onPress = {this.placePressed}
              />}
          />
        </View>
       
      </View>
    )
  }
}