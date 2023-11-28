import React from 'react';
import { View, Text, Image, ImageBackground} from 'react-native';
import { Button, Avatar, Input, Icon } from 'react-native-elements';
import styles from '../../../styles';

export function Footer() {
  
  return (
    <ImageBackground source={require('../../assets/footer.png')} resizeMode="cover" style={styles.footerImg}>
      <Text style={styles.footerText}>COPYRIGHT © 2023 TUNEDIN</Text>
        <View style={styles.socialIconsContainerTop}>
          <Icon name="facebook" type="font-awesome" color="white" size={32} />
          <Icon name="instagram" type="font-awesome" color="white" size={32} style={styles.iconSpacing} />
        </View>
        <View style={styles.socialIconsContainerBottom}>
          <Icon name="snapchat" type="font-awesome" color="white" size={32} style={styles.iconSpacing} />
          <Icon name="spotify" type="font-awesome" color="white" size={32} style={styles.iconSpacing} />
        </View>
    </ImageBackground>
  );
}
