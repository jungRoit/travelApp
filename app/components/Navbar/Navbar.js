import React from 'react';
import {View} from 'react-native';

import styles from './styles';
import NavbarItem from '../NavbarItem';

export default class Navbar extends React.Component {
  constructor(props){
    super(props);
    this.state={
      activeTab: 'Info'
    }
  }

  render() {
    
    return (
      <View style={styles.navbar}>
        <NavbarItem selected={this.selected} text='Info' active={this.state.activeTab} />
        <NavbarItem selected={this.selected} text='Pictures' active={this.state.activeTab} />
        <NavbarItem selected={this.selected} text='Reviews' active={this.state.activeTab} />
    </View>
    )
  }

  selected = (text) => {
    this.props.selectedTab(text);
    this.setState({ activeTab: text });
  }
}