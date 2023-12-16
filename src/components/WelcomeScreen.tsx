import { useAppSelector } from '@hooks/store/app-store';
import { StackNavigationProp } from '@react-navigation/stack';
import { ROOM_STATUS } from '@store/multiplayer/room-slice/room-slice.constants';
import { RoomState } from '@store/multiplayer/room-slice/room-slice.types';
import React, { useEffect } from 'react';
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

const useRedirectToCurrentScreen = (room: RoomState, navigation: WelcomeScreenNavigationProp) => {
    if (room) {
      switch(room.roomStatus) {
        case ROOM_STATUS.LOBBY:
        case ROOM_STATUS.LOADING_GAME: 
          navigation.navigate("GameLobby");
        case ROOM_STATUS.IN_QUESTION:
          navigation.navigate("Question");
      }
    }
}

export function WelcomeScreen({ navigation }: WelcomeScreenProps) {

  const {user} = useUserState(window);
  const roomState = useAppSelector(store => store.room);
  useRedirectToCurrentScreen(roomState, navigation);

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
          <Button title="Back to home" buttonStyle={styles.playButton} onPress={() => navigation.navigate('Login')}/>

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