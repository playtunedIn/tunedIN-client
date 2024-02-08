import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View, Text } from 'react-native';
import { Button, Avatar, Input, Icon } from 'react-native-elements';
import { RootStackParamList } from '../../navigationTypes';
import styles from '../../styles';
import { Footer } from './footer/Footer';
import { Header } from './header/Header';

type RoundResultsNavigationProp = StackNavigationProp<RootStackParamList, 'RoundResults'>;

type RoundResultsProps = {
  navigation: RoundResultsNavigationProp;
};

export function RoundResults({ navigation }: RoundResultsProps) {
  return (
    <>
        <View style={styles.container}>
          <View style={styles.contentContainer}>
            <Text style={styles.welcomeText}>Party Play</Text>
            <Text style={styles.descriptionText}>Round 1 Votes</Text>
            <Text></Text>
            <Text>Haley <Icon name='check' type='font-awesome'></Icon> <Icon name='check' type='font-awesome'></Icon> </Text>
            <Text>Matt <Icon name='check' type='font-awesome'></Icon> </Text>
            <Text>Shayne <Icon name='check' type='font-awesome'></Icon> </Text>
            <Text>Trevor</Text> 
            <Text></Text>
            <Button title="Round Points" buttonStyle={styles.playButton} onPress={() => navigation.navigate('RoundPoints')}/>
          </View>
        </View>
      <Footer />
    </>
  );
}
