import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { RootStackParamList } from '../../navigationTypes';
import styles from '../../styles';
import SocketStatus from './common/SocketStatus';
import useUserState from './hooks/useUserState';

type WelcomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Welcome'>;

type WelcomeScreenProps = {
  navigation: WelcomeScreenNavigationProp;
};

export function WelcomeScreen({ navigation }: WelcomeScreenProps) {

  const {isLoggedIn, user, logout} = useUserState(window);

  const onBackToHome = () => {
    logout();
    navigation.navigate('Login')
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.logoText}>tuned<Text style={styles.logoIN}>IN</Text></Text>
        <Icon name="music-note" size={30} color="#000" />
      </View>

      {!!user && <View style={styles.contentContainer}>
        <Text style={styles.welcomeText}>Welcome to tunedIN {user?.display_name}!</Text>
       <Text style={styles.descriptionText}>
          You have successfully signed in with your Spotify account. Now let's get playing!
        </Text>

        <Button title="PLAY" buttonStyle={styles.playButton} onPress={() => navigation.navigate('PartyPlay')}/>
      </View>}
      {!user && <View style={styles.contentContainer}>
        <Text style={styles.welcomeText}>There was an issue authenticating</Text>
          <Button title="Back to home" buttonStyle={styles.playButton} onPress={onBackToHome}/>

        </View>}

      <SocketStatus />
      <View style={styles.socialIconsContainer}>
          <Icon name="facebook" type="font-awesome" color="#3b5998" size={24} />
          <Icon name="instagram" type="font-awesome" color="#C13584" size={24} style={styles.iconSpacing} />
          <Icon name="snapchat" type="font-awesome" color="#FFFC00" size={24} style={styles.iconSpacing} />
          <Icon name="spotify" type="font-awesome" color="#1DB954" size={24} style={styles.iconSpacing} />
      </View>
      <Text style={styles.footerText}>COPYRIGHT © 2023 TUNEDIN</Text>
    </View>
  );
}