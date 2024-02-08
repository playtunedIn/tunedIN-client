import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View, Text, Image} from 'react-native';
import { Button } from 'react-native-elements';
import { RootStackParamList } from '../../../navigationTypes';
import { Footer } from '../footer/Footer';
import { Header } from '../header/Header';
import { useAppSelector } from '../../hooks/store/app-store';
import styles from './styles';
import { useMultiplayerClient } from '@hooks/multiplayer';

type GameLobbyNavigationProp = StackNavigationProp<RootStackParamList, 'GameLobby'>;

type GameLobbyProps = {
  navigation: GameLobbyNavigationProp;
};

export function GameLobby({ navigation }: GameLobbyProps) {
  const roomState = useAppSelector(state => state.room);
  const playerState = useAppSelector(state => state.players);
  const { startGame } = useMultiplayerClient();

  function onStartGame() {
    console.log('start game clicked');
    startGame(roomState.roomId);
    navigation.navigate('Question');
  }

  return (
    <>
        <View style={styles.contentContainer}>
          <View style={styles.rowContainer}>
            <Image style={styles.partyIcon} source={require('../../assets/partyPlay.png')} />
            <Text style={styles.partyPlayText}>Party Play</Text>
          </View>
          <Text style={styles.gameLobbyText}>Game Lobby: {roomState.roomId}</Text>
            <View style={styles.accountsContainer}>
            {playerState.players.map(player => {
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
          <Button title="Start" titleStyle={{ color: 'black' }} buttonStyle={styles.startButton} onPress={() => onStartGame()}/>
        </View>
      <Footer />
    </>
  );
}
