import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View, Text, Image} from 'react-native';
import { Button, Avatar, Input, Icon } from 'react-native-elements';
import { RootStackParamList } from '../../navigationTypes';
import styles from '../../styles';
import { Footer } from './footer/Footer';
import { Header } from './header/Header';

type GameLobbyNavigationProp = StackNavigationProp<RootStackParamList, 'GameLobby'>;

type GameLobbyProps = {
  navigation: GameLobbyNavigationProp;
};

export function GameLobby({ navigation }: GameLobbyProps) {
  const players = [
    {
      id: 1,
      name: 'Haley',
      avatar: <Icon name='account_circle' size={20} />
    },
    {
      id: 2,
      name: 'Matt',
      avatar: <Icon name='account_circle' size={20} />
    },
    {
      id: 3,
      name: 'Trevor',
      avatar: <Icon name='account_circle' size={20} />
    },
    {
      id: 4,
      name: 'Emil',
      avatar: <Icon name='account_circle' size={20} />
    },
    {
      id: 5,
      name: 'Jamie',
      avatar: <Icon name='account_circle' size={20} />
    },
  ]
  
  return (
    <>
    {/* <View style={styles.fullContainer}> */}
      <Header />
      <View style={styles.contentContainer}>
        <View style={styles.rowContainer}>
          <Image style={styles.partyIcon} source={require('../assets/partyPlay.png')} />
          <Text style={styles.partyPlayText}>Party Play</Text>
        </View>
        <Text style={styles.gameLobbyText}>Game Lobby: SJ4Z</Text>
          {/* {players.map((player) => {
            <View style={styles.headerContainer} key={player.id}>
              {player.avatar}
              <Text style={styles.playerText}>{player.name}</Text>
            </View>
          })} */}
          <View style={styles.accountsContainer}>
            <View style={styles.accountContainer}>
              <Image style={styles.avatarIcon} source={require('../assets/avatar.png')} />
              <Text style={styles.playerText}>Haley</Text>
            </View>
            <View style={styles.accountContainer}>
              <Image style={styles.avatarIcon} source={require('../assets/avatar.png')} />
              <Text style={styles.playerText}>Matt</Text>
            </View>
            <View style={styles.accountContainer}>
              <Image style={styles.avatarIcon} source={require('../assets/avatar.png')} />
              <Text style={styles.playerText}>Trevor</Text>
            </View>
            <View style={styles.accountContainer}>
              <Image style={styles.avatarIcon} source={require('../assets/avatar.png')} />
              <Text style={styles.playerText}>Emil</Text>
            </View>
            <View style={styles.accountContainer}>
              <Image style={styles.avatarIcon} source={require('../assets/avatar.png')} />
              <Text style={styles.playerText}>Jamie</Text>
            </View>
          </View>
        <View style={styles.rowContainer}>
          <Button title="Leave" titleStyle={{ color: 'black' }} buttonStyle={styles.leaveButton} />
          <Button title="Invite" titleStyle={{ color: 'black' }} buttonStyle={styles.inviteButton} />
        </View>
        <Button title="Start" titleStyle={{ color: 'black' }} buttonStyle={styles.invitePlayersButton} onPress={() => navigation.navigate('Question')}/>
      </View>
      <Footer />
    {/* </View> */}
    </>
  );
}
