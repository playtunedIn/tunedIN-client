import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Button, Avatar, Input, Icon } from 'react-native-elements';
import { RootStackParamList } from '../../navigationTypes';
import styles from '../../styles';
import { useAppSelector } from '@hooks/store/app-store';
import { useMultiplayerClient } from '@hooks/multiplayer/multiplayer-client';

type QuestionNavigationProp = StackNavigationProp<RootStackParamList, 'Question'>;

type QuestionProps = {
  navigation: QuestionNavigationProp;
};

export function QuestionScreen({ navigation }: QuestionProps) {
  const [playerAnswer, setPlayerAnswer] = useState(''); 
  const roomState = useAppSelector(state => state.room);
  const questions = useAppSelector(state => state.questions.questions);
  const questionIndex = useAppSelector(state => state.questions.questionIndex);
  const { answerQuestion } = useMultiplayerClient();


  const question = questions && questions.length > 0 ? questions[questionIndex].description : 'No questions available';
  const questionTitle = questions && questions.length > 0 ? questions[questionIndex].question : 'No title available';

  const questionChoices = questions && questions.length > 0 ? questions[questionIndex].choices : [];

  async function onSubmitAnswer() {
    answerQuestion(roomState.roomId, questionIndex, [parseInt(playerAnswer)]);
  }

  return (
    <View style={styles.container}>

<View style={styles.headerContainer}>
        <Text style={styles.logoText}>tuned<Text style={styles.logoIN}>IN</Text></Text>
        <Icon name="music-note" size={30} color="#000" />
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.welcomeText}>Party Play</Text>
        <Text style={styles.descriptionText}>{questionTitle}</Text>
        <Text style={styles.descriptionText}>{question}</Text>
        <Text>{playerAnswer}</Text>

          {questionChoices.length > 0 ? questionChoices.map((choice, index) => {
            return (
              <Button title={questionChoices[index]} buttonStyle={styles.playButton} onPress={() => setPlayerAnswer(index.toString())}/>
            )
          }) : <Text>No choices availible</Text>}
        
        <Text></Text>
        <Button title="Submit" buttonStyle={styles.playButton} onPress={() => onSubmitAnswer()}/>
      </View>

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
