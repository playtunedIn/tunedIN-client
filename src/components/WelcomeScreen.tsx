import { useAppSelector } from '@hooks/store/app-store';
import { StackNavigationProp } from '@react-navigation/stack';
import { ROOM_STATUS } from '@store/multiplayer/room-slice/room-slice.constants';
import { RoomState } from '@store/multiplayer/room-slice/room-slice.types';
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

const useRedirectToCurrentScreen = (room: RoomState, navigation: WelcomeScreenNavigationProp) => {
  if (room) {
    switch(room.roomStatus) {
      case ROOM_STATUS.LOBBY:
      case ROOM_STATUS.LOADING_GAME: 
        navigation.navigate("GameLobby");
        break;
      case ROOM_STATUS.IN_QUESTION:
        navigation.navigate("Question");
        break;
    }
  }
}

export function WelcomeScreen({ navigation }: WelcomeScreenProps) {

  const roomState = useAppSelector(store => store.room);
  const {user, logout} = useUserState(window);

  useRedirectToCurrentScreen(roomState, navigation);
  const onBackToHome = () => {
    logout();
    navigation.navigate('Login')
  }

  return (
    <>
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