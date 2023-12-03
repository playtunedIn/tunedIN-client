import React from 'react';
import { View, Text, ImageBackground} from 'react-native';
import { Icon } from 'react-native-elements';
import styles from './styles';

export function Footer() {
  
  return (
    <ImageBackground source={require('../../assets/footer.png')} resizeMode="cover" style={styles.footerImg}>
      <Text style={styles.footerText}>COPYRIGHT © 2023 TUNEDIN</Text>
        <View style={styles.socialIconsContainer}>
          <Icon name="facebook" type="font-awesome" color="white" size={32} />
          <Icon name="instagram" type="font-awesome" color="white" size={32} style={styles.iconSpacing} />
          <Icon name="snapchat" type="font-awesome" color="white" size={32} style={styles.iconSpacing} />
          <Icon name="spotify" type="font-awesome" color="white" size={32} style={styles.iconSpacing} />
        </View>
    </ImageBackground>
  );
}
