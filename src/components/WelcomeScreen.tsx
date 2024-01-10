import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { RootStackParamList } from '../../navigationTypes';
import styles from '../../styles';
import SocketStatus from './common/SocketStatus';
import { Header } from './header/Header';
import { Footer } from './footer/Footer';
import useUserState from './hooks/useUserState';

type WelcomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Welcome'>;

type WelcomeScreenProps = {
  navigation: WelcomeScreenNavigationProp;
};

export function WelcomeScreen({ navigation }: WelcomeScreenProps) {

  const {user, logout} = useUserState(window);

  const onBackToHome = () => {
    logout();
    navigation.navigate('Login')
  }

  return (
    <>
    <Header />
      <View style={styles.container}>
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
      </View>
      <Footer />
    </>
  );
}