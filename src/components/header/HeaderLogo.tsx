import React from 'react';
import { Image } from 'react-native';
import styles from './styles';


export function HeaderLogo() {
  
  return (
    <Image style={styles.logoImg} source={require('../../assets/TunedIN-logo.png')} />
  );
}
