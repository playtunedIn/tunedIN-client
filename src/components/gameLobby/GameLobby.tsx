import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View, Text, Image} from 'react-native';
import { Button } from 'react-native-elements';
import { RootStackParamList } from '../../../navigationTypes';
import { Footer } from '../footer/Footer';
import { Header } from '../header/Header';
import { useMultiplayerClient } from '../../hooks/multiplayer/multiplayer-client';
import { useAppSelector } from '../../hooks/store/app-store';
import useUserState from '../hooks/useUserState';
import { ROOM_STATUS } from '../../store/multiplayer/room-slice/room-slice.constants';
import styles from './styles';

type GameLobbyNavigationProp = StackNavigationProp<RootStackParamList, 'GameLobby'>;

type GameLobbyProps = {
  navigation: GameLobbyNavigationProp;
};

//need to get players
//need to get host and disable start unless host
//need to get room code
const players: { id: number, name: string }[] = [
  {
    id: 1,
    name: 'Haley',
  },
  {
    id: 2,
    name: 'Matt',
  },
  {
    id: 3,
    name: 'Trevor',
  },
  {
    id: 4,
    name: 'Emil',
  },
  {
    id: 5,
    name: 'Jamie',
  },
]

export function GameLobby({ navigation }: GameLobbyProps) {
  
  return (
    <>
    <Header />
        <View style={styles.contentContainer}>
          <View style={styles.rowContainer}>
            <Image style={styles.partyIcon} source={require('../../assets/partyPlay.png')} />
            <Text style={styles.partyPlayText}>Party Play</Text>
          </View>
          <Text style={styles.gameLobbyText}>Game Lobby: SJ4Z</Text>
            <View style={styles.accountsContainer}>
            {players.map(player => {
              return(
              <View style={styles.accountContainer}>
                <Image style={styles.avatarIcon} source={require('../../assets/avatar.png')} />
                <Text style={styles.playerText}>{player.name}</Text>
              </View>
              )
            })}
            </View>
          <View style={styles.rowContainer}>
            <Button title="Leave" titleStyle={{ color: 'black' }} buttonStyle={styles.leaveButton} />
            <Button title="Invite" titleStyle={{ color: 'black' }} buttonStyle={styles.inviteButton} />
          </View>
          <Button title="Start" titleStyle={{ color: 'black' }} buttonStyle={styles.startButton} onPress={() => navigation.navigate('Question')}/>
        </View>
      <Footer />
    </>
  );
}
