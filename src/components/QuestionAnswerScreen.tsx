import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View, Text } from 'react-native';
import { Button, Avatar, Input, Icon } from 'react-native-elements';
import { RootStackParamList } from '../../navigationTypes';
import styles from '../../styles';
import { Footer } from './footer/Footer';
import { Header } from './header/Header';

type QuestionAnswerNavigationProp = StackNavigationProp<RootStackParamList, 'Question'>;

type QuestionAnswerProps = {
  navigation: QuestionAnswerNavigationProp;
};

export function QuestionAnswerScreen({ navigation }: QuestionAnswerProps) {
  return (
    <>
        <View style={styles.container}>
          <View style={styles.contentContainer}>
            <Text style={styles.welcomeText}>Party Play</Text>
            <Text style={styles.descriptionText}>1. Which player has this song queued up?</Text>
            <Text></Text>
            <Text>Correct Answer...</Text>
            <Text>Haley!!!</Text>
            <Text>3 Votes</Text>
            <Text></Text>
            <Button title="RoundResults" buttonStyle={styles.playButton} onPress={() => navigation.navigate('RoundResults')}/>
          </View>
        </View>
      <Footer />
    </>
  );
}
