import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View, Text } from 'react-native';
import { Button, Avatar, Input, Icon } from 'react-native-elements';
import { RootStackParamList } from '../../navigationTypes';
import styles from '../../styles';
import { Footer } from './footer/Footer';
import { Header } from './header/Header';

type QuestionNavigationProp = StackNavigationProp<RootStackParamList, 'Question'>;

type QuestionProps = {
  navigation: QuestionNavigationProp;
};

export function QuestionScreen({ navigation }: QuestionProps) {
  return (
    <>
        <View style={styles.container}>
          <View style={styles.contentContainer}>
            <Text style={styles.welcomeText}>Party Play</Text>
            <Text style={styles.descriptionText}>1. Which player has this song queued up?</Text>
            <Text></Text>
            <Button title="Matt" buttonStyle={styles.playButton} />
            <Button title="Trevor" buttonStyle={styles.playButton} />
            <Button title="Shayne" buttonStyle={styles.playButton} />
            <Button title="Haley" buttonStyle={styles.playButton} />
            <Text></Text>
            <Button title="Submit" buttonStyle={styles.playButton} onPress={() => navigation.navigate('QuestionAnswer')}/>
          </View>
        </View>
      <Footer />
    </>
  );
}
