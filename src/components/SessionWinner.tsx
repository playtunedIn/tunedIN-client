import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View, Text } from 'react-native';
import { Button, Avatar, Input, Icon } from 'react-native-elements';
import { RootStackParamList } from '../../navigationTypes';
import styles from '../../styles';

type SessionWinnerNavigationProp = StackNavigationProp<RootStackParamList, 'Question'>;

type SessionWinnerProps = {
  navigation: SessionWinnerNavigationProp;
};

export function SessionWinner({ navigation }: SessionWinnerProps) {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.welcomeText}>Party Play</Text>
        <Text style={styles.descriptionText}>And the winner is....</Text>
        <Text></Text>
        <Text>Haley!!!</Text>
        <Text>1500 Points!!!!!!!</Text>
        <Text></Text>
        <Button title="Session Results" buttonStyle={styles.playButton} onPress={() => navigation.navigate('SessionResults')}/>
      </View>
    </View>
  );
}
