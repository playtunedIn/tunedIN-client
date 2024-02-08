import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View, Text } from 'react-native';
import { Button, Avatar, Input, Icon } from 'react-native-elements';
import { RootStackParamList } from '../../navigationTypes';
import styles from '../../styles';
import { Footer } from './footer/Footer';
import { Header } from './header/Header';

type RoundPointsNavigationProp = StackNavigationProp<RootStackParamList, 'RoundResults'>;

type RoundPointsProps = {
  navigation: RoundPointsNavigationProp;
};

export function RoundPointsScreen({ navigation }: RoundPointsProps) {
  return (
    <>
        <View style={styles.container}>
          <View style={styles.contentContainer}>
            <Text style={styles.welcomeText}>Party Play</Text>
            <Text style={styles.descriptionText}>1. Which player has this song queued up?</Text>
            <Text></Text>
            <Text>Haley 150 </Text>
            <Text>Matt 000</Text>
            <Text>Shayne 100</Text>
            <Text>Trevor 100</Text> 
            <Text></Text>
            <Button title="SessionWinner" buttonStyle={styles.playButton} onPress={() => navigation.navigate('SessionWinner')}/>
          </View>
        </View>
      <Footer />
    </>
  );
}
