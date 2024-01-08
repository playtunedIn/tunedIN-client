import { useMultiplayerClient } from '../../src/hooks/multiplayer';
import { useAppSelector } from '../../src/hooks/store/app-store';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { View, Text } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { RootStackParamList } from '../../navigationTypes';
import styles from '../../styles';
import SocketStatus from './common/SocketStatus';
import { START_GAME_MESSAGE } from '@hooks/multiplayer/handlers/socket-handlers.constants';

type RoundSelectionNavigationProp = StackNavigationProp<RootStackParamList, 'RoundSelection'>;

type RoundSelectionProps = {
  navigation: RoundSelectionNavigationProp;
};

const numberOfRounds = [5, 10, 15];

export function RoundSelection({ navigation }: RoundSelectionProps) {
  const [waitingForRoomCreate, setWaitingForRoomCreate] = useState(false);
  const [rounds, setRounds] = useState(5);

  const { createRoom, connectionStatus } = useMultiplayerClient();

  const onCreateRoom = () => {
    setWaitingForRoomCreate(true);
    createRoom(rounds);
  }

  const onCancel = () => {
    navigation.navigate('PartyPlay');
  }

  // get room id, which won't exist until after the room has been created
  const roomId = useAppSelector(state => state.room.roomId);

  useEffect(() => {
    if (roomId && waitingForRoomCreate) {
      setWaitingForRoomCreate(false);
      navigation.navigate('GameLobby');
    }
  }, [roomId, waitingForRoomCreate])

  return (
    <View style={styles.container}>

      <View style={styles.headerContainer}>
        <Text style={styles.logoText}>tuned<Text style={styles.logoIN}>IN</Text></Text>
        <Icon name="music-note" size={30} color="#000" />
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.welcomeText}>Party Play</Text>
        <Text style={styles.descriptionText}>Select number of rounds.</Text>
        {numberOfRounds.map(numRounds => 
          <Button title={`${numRounds}  Rounds`} buttonStyle={styles.playButton} onPress={() => setRounds(numRounds)} />
        )}

        <Text></Text>
        <Button title="Cancel" buttonStyle={styles.playButton} onPress={onCancel}/>
        <Button title="Create Room" buttonStyle={styles.playButton} onPress={onCreateRoom}/>
      </View>

      <SocketStatus />
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

// tsconfig
// "exclude": ["node_modules", "**/*.test.*", "**/*.mock.*"],

// game-state.ts
// export interface Question {
//   expirationTimestamp?: number; //Todo Implement timer feature
//   question: string;
//   description: string;
//   descriptionExtra?: string | string[];
//   choices: string[];
//   answerType: string;
//   answers: number[]; // Indexes in choices for correct answer.
// }

// get-questions.ts
//  // TODO: Integrate with actual question fetching services
//  const spotifyQuestions = await getGameQuestions([user], 3);

//  questions = spotifyQuestions.map(question => {
//    return {
//      question: question.questionTitle,
//      description: question.questionDescription,
//      descriptionExtra: question.questionDescriptionExtra,
//      choices: question.answerOptions,
//      answerType: question.answerType,
//      answers: question.correctAnswer.map(answer => parseInt(answer))
//    };
//  })

//  START_GAME_MESSAGE.ts
//  import type { WebSocket } from 'ws';

// import { REDIS_ERROR_CODES, START_GAME_ERROR_CODES } from '../../../errors';
// import { isValidSchema } from '../../message.validator';
// import type { StartGameReq } from './start-game.validator';
// import { START_GAME_SCHEMA_NAME } from './start-game.validator';
// import { START_GAME_ERROR_RESPONSE, UPDATE_ROOM_STATUS_RESPONSE } from '../../responses';
// import { sendResponse } from '../../../utils/websocket-response';
// import type { RedisQuery } from '../../../clients/redis';
// import {
//   HOST_ID_QUERY,
//   PLAYERS_QUERY,
//   ROOM_STATUS_QUERY,
//   gameStatePublisherClient,
//   queryMultiple,
// } from '../../../clients/redis';
// import { type PlayerState, ROOM_STATUS, type RoomStatus } from '../../../clients/redis/models/game-state';
// import { publishMessageHandler } from '../../subscribed-message-handlers';
// import { getQuestionsHandler } from '../../game-handlers/question-handlers/get-questions';

// const MIN_PLAYERS_TO_START = 2;

// export const startGameHandler = async (ws: WebSocket, data: StartGameReq) => {
//   if (!isValidSchema(data, START_GAME_SCHEMA_NAME)) {
//     return sendResponse(ws, START_GAME_ERROR_RESPONSE, { errorCode: START_GAME_ERROR_CODES.INVALID_ROOM_REQ });
//   }

//   const { userId } = ws.userToken;
//   const { roomId } = data;
//   const user = {
//     name: ws.userToken.name,
//     token: ws.userToken.spotifyToken
//   };

//   let response: Record<RedisQuery, unknown>;
//   try {
//     response = await queryMultiple(roomId, [HOST_ID_QUERY, ROOM_STATUS_QUERY, PLAYERS_QUERY], gameStatePublisherClient);
//   } catch (err) {
//     return sendResponse(ws, START_GAME_ERROR_RESPONSE, { errorCode: (err as Error).message });
//   }

//   const hostId = response[HOST_ID_QUERY] as string;
//   const roomStatus = response[ROOM_STATUS_QUERY] as RoomStatus;
//   const players = response[PLAYERS_QUERY] as PlayerState[];

//   if (userId !== hostId) {
//     return sendResponse(ws, START_GAME_ERROR_RESPONSE, { errorCode: START_GAME_ERROR_CODES.NOT_HOST });
//   }

//   if (roomStatus !== ROOM_STATUS.LOBBY) {
//     return sendResponse(ws, START_GAME_ERROR_RESPONSE, { errorCode: START_GAME_ERROR_CODES.ROOM_NOT_IN_LOBBY });
//   }

//   // if (players.length < MIN_PLAYERS_TO_START) {
//   //   return sendResponse(ws, START_GAME_ERROR_RESPONSE, { errorCode: START_GAME_ERROR_CODES.NOT_ENOUGH_PLAYERS });
//   // }

//   try {
//     await gameStatePublisherClient.json.set(roomId, ROOM_STATUS_QUERY, ROOM_STATUS.LOADING_GAME);
//   } catch {
//     return sendResponse(ws, START_GAME_ERROR_RESPONSE, { errorCode: REDIS_ERROR_CODES.COMMAND_FAILURE });
//   }

//   await publishMessageHandler(roomId, UPDATE_ROOM_STATUS_RESPONSE, {
//     roomStatus: ROOM_STATUS.LOADING_GAME,
//   });

//   getQuestionsHandler(roomId, user);
// };
