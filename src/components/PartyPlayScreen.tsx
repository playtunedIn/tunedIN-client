import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { Button, Input, Icon } from 'react-native-elements';
import { RootStackParamList } from '../../navigationTypes';
import styles from '../../styles';
import { useMultiplayerClient } from '@hooks/multiplayer/multiplayer-client';
import { useAppSelector } from '@hooks/store/app-store';
import useUserState from './hooks/useUserState';
import { ROOM_STATUS } from '@store/multiplayer/room-slice/room-slice.constants';
import { Header } from './header/Header';
import { Footer } from './footer/Footer';

type PartyPlayScreenNavigationProp = StackNavigationProp<RootStackParamList, 'PartyPlay'>;

type PartyPlayScreenProps = {
  navigation: PartyPlayScreenNavigationProp;
};

export function PartyPlayScreen({ navigation }: PartyPlayScreenProps) {
  const [roomCode, setRoomCode] = useState('');
  const { joinRoom } = useMultiplayerClient();

  const roomState = useAppSelector(state => state.room.roomStatus);
  const userState = useUserState(window);

  useEffect(() => {
    if (roomState === ROOM_STATUS.LOBBY) {
      navigation.navigate('GameLobby');
  }
  }, [roomState]);

  async function joinLobby() {
    const userDisplayName = userState.user?.display_name ?? 'Default Name';

    joinRoom(roomCode, userDisplayName); 
  }

  return (
    <>
      <Header />
        <View style={styles.container}>
          <View style={styles.contentContainer}>
            <Text style={styles.welcomeText}>Party Play</Text>
            <Text style={styles.descriptionText}>Enter Code to Join Room</Text>
              <Input placeholder="Enter 4-digit code" maxLength={4} inputStyle={styles.joinCode} value={roomCode} onChangeText={setRoomCode}/>
              <Button title="  Join Room  " buttonStyle={styles.playButton} onPress={() => joinLobby()}/>
              <Text></Text>
            <Text style={styles.footerText}>or</Text>
            <Text></Text>
            <Button title="Create Room" buttonStyle={styles.playButton} onPress={() => navigation.navigate('RoundSelection')}/>
          </View>
        </View>
      <Footer />
    </>
  );
}
