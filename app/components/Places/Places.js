import React from 'react';
import { View, Text, ImageBackground, TouchableWithoutFeedback } from 'react-native';

import styles from './styles';

import images from '../../config/images';

export default class Places extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoved: false
    }
  }

  render() {
    return (
      <TouchableWithoutFeedback
        onPress={() => this.pressed()}
      >
        <View style={{ borderBottomWidth: 2, borderColor: 'white' }}>
          <ImageBackground
            source={this.props.place.image}
            style={styles.backgroundImage}>
            <TouchableWithoutFeedback onPress={this.toggleHeart}>
              <ImageBackground
                source={(this.state.isLoved) ? images.heartActive : images.heart}
                style={styles.heartBox} />
            </TouchableWithoutFeedback>
            <View style={styles.contentBox}>
              <View style={styles.numberBox}>
                <Text style={styles.number}>{this.props.place.numberOfThings}</Text>
              </View>
              <View style={styles.textBox}>
                <Text style={styles.subText}>Things to do in</Text>
                <Text style={styles.placeTitle}>{this.props.place.title}</Text>
              </View>

            </View>
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>

    )
  }

  toggleHeart = () => {
    this.setState(prevState => ({ isLoved: !prevState.isLoved }));
  }

  pressed = () => {
    this.props.onPress(this.props.place);
  }

}