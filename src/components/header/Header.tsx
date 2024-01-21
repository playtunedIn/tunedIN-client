import React from 'react';
import { View, Image} from 'react-native';
import { HeaderLogo } from './headerLogo';
import styles from './styles';


export function Header() {
  
  return (
    <View style={styles.headingContainer}>
        <HeaderLogo />
        <Image style={styles.profileImg} source={require('../../assets/avatar.png')} />
        <Image style={styles.musicImg} source={require('../../assets/music-notes.png')} />
    </View>
  );
}
