import React from 'react';
import { ImageBackground, View, Image, TouchableWithoutFeedback} from 'react-native';

import styles from './styles';

import images from '../../config/images';



export default class InfoHeader extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoved: false
    }
  }

  render() {
    return (
      <ImageBackground style={styles.backgroundImg} source={this.props.place.info.image}>
        <View style={styles.iconBox}>
          <Image style={styles.searchIcon} source={images.search}/>
          <TouchableWithoutFeedback onPress={this.toggleHeart}>
          <Image style={styles.icon} source={this.state.isLoved ? images.heartActive : images.heart}/>
          </TouchableWithoutFeedback>
        </View>
      </ImageBackground>
    )
  }

  toggleHeart = () => {
    this.setState(prevState =>({isLoved: !prevState.isLoved}));
  }
}