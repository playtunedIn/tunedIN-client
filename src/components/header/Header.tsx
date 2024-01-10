import React from 'react';
import { View, Image} from 'react-native';
import styles from './styles';


export function Header() {
  
  return (
    <View style={styles.headingContainer}>
      <View style={styles.topHeaderRow}>
        <Image style={styles.logoImg} source={require('../../assets/TunedIN-logo.png')} />
        <Image style={styles.profileImg} source={require('../../assets/avatar.png')} />
      </View>
      <Image style={styles.musicImg} source={require('../../assets/music-notes.png')} />
    </View>
  );
}
