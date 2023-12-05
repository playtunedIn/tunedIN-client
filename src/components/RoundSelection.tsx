import { useMultiplayerClient } from '../../src/hooks/multiplayer';
import { useAppSelector } from '../../src/hooks/store/app-store';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { View, Text } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { RootStackParamList } from '../../navigationTypes';
import styles from '../../styles';
import SocketStatus from './common/SocketStatus';

type RoundSelectionNavigationProp = StackNavigationProp<RootStackParamList, 'RoundSelection'>;

type RoundSelectionProps = {
  navigation: RoundSelectionNavigationProp;
};

const numberOfRounds = [5, 10, 15];

export function RoundSelection({ navigation }: RoundSelectionProps) {
  const [waitingForRoomCreate, setWaitingForRoomCreate] = useState(false);
  const [rounds, setRounds] = useState(5);

  const { createRoom, connectionStatus } = useMultiplayerClient();

  const onCreateRoom = () => {
    setWaitingForRoomCreate(true);
    createRoom(rounds);
  }

  const onCancel = () => {
    navigation.navigate('PartyPlay');
  }

  // get room id, which won't exist until after the room has been created
  const roomId = useAppSelector(state => state.room.roomId);

  useEffect(() => {
    if (roomId && waitingForRoomCreate) {
      setWaitingForRoomCreate(false);
      navigation.navigate('HostLobby');
    }
  }, [roomId, waitingForRoomCreate])

  return (
    <View style={styles.container}>

      <View style={styles.headerContainer}>
        <Text style={styles.logoText}>tuned<Text style={styles.logoIN}>IN</Text></Text>
        <Icon name="music-note" size={30} color="#000" />
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.welcomeText}>Party Play</Text>
        <Text style={styles.descriptionText}>Select number of rounds.</Text>
        {numberOfRounds.map(numRounds => 
          <Button title={`${numRounds}  Rounds`} buttonStyle={styles.playButton} onPress={() => setRounds(numRounds)} />
        )}

        <Text></Text>
        <Button title="Cancel" buttonStyle={styles.playButton} onPress={onCancel}/>
        <Button title="Create Room" buttonStyle={styles.playButton} onPress={onCreateRoom}/>
      </View>

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
