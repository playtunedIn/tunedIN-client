import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { useEffect } from 'react';
import { View, Text, Linking } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { RootStackParamList } from '../../navigationTypes';
import styles from '../../styles';
import useUserState from './hooks/useUserState';

const showMockTokenButton = process.env.NODE_ENV !== "production";


const API_LOGIN_URL = 'https://localhost:3001/login';
const MOCK_TOKEN_URL = 'https://localhost:3001/gen-mock-token';

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

type LoginScreenProps = {
  navigation: LoginScreenNavigationProp;
};

export function LoginScreen({ navigation }: LoginScreenProps) {

  const userState = useUserState(window);
  if (userState.userToken) {
    navigation.navigate("Welcome");
  }

  const onLogin = () => window ? window.location.href = API_LOGIN_URL : Linking.openURL(API_LOGIN_URL);

  const generateMockToken = () => window.location.href = MOCK_TOKEN_URL;

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.logoText}>tuned<Text style={styles.logoIN}>IN</Text></Text>
        <Icon name="music-note" size={30} color="#000" />
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.welcomeText}>Welcome to tunedIN!</Text>
        <Text style={styles.descriptionText}>
            TunedIN uses your Spotify music history to create a fun and interactive game for you and your friends! Click the button below to link your Spotify account now.
        </Text>

        <Button title="Link Spotify Account" buttonStyle={styles.playButton} onPress={onLogin} />
        { showMockTokenButton && <Button title="Generate Mock Token" buttonStyle={styles.playButton} onPress={generateMockToken} /> }
      </View>

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