import React from 'react';
import { View, Text, Image, ImageBackground} from 'react-native';
import { Button, Avatar, Input, Icon } from 'react-native-elements';
import styles from '../../../styles';


export function Header() {
  
  return (
    <ImageBackground source={require('../../assets/music-notes.png')} resizeMode="cover" style={styles.musicImg}>
      <View style={styles.headingContainer}>
        <Image style={styles.logoImg} source={require('../../assets/TunedIN-logo.png')} />
        <Image style={styles.profileImg} source={require('../../assets/avatar.png')} />
      </View>
    </ImageBackground>
  );
}
