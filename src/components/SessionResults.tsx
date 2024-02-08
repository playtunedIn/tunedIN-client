import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View, Text } from 'react-native';
import { Button, Avatar, Input, Icon } from 'react-native-elements';
import { RootStackParamList } from '../../navigationTypes';
import styles from '../../styles';
import { Footer } from './footer/Footer';
import { Header } from './header/Header';

type SessionResultsNavigationProp = StackNavigationProp<RootStackParamList, 'RoundResults'>;

type SessionResultsProps = {
  navigation: SessionResultsNavigationProp;
};

export function SessionResults({ navigation }: SessionResultsProps) {
  return (
    <>
        <View style={styles.container}>
          <View style={styles.contentContainer}>
            <Text style={styles.welcomeText}>Party Play</Text>
            <Text style={styles.descriptionText}>Session Results</Text>
            <Text></Text>
            <Text>Haley 1500 </Text>
            <Text>Matt 1000</Text>
            <Text>Shayne 2000</Text>
            <Text>Trevor 1100</Text> 
            <Text></Text>
            <Button title="Leave Room" buttonStyle={styles.playButton} onPress={() => navigation.navigate('PartyPlay')}/>
            <Button title="Play Again" buttonStyle={styles.playButton} onPress={() => navigation.navigate('Question')}/>
          </View>
        </View>
      <Footer />
    </>
  );
}
