import {
  ANSWER_QUESTION_MESSAGE,
  CREATE_ROOM_MESSAGE,
  LEAVE_ROOM_MESSAGE,
  JOIN_ROOM_MESSAGE,
  START_GAME_MESSAGE,
} from '@hooks/multiplayer/handlers/socket-handlers.constants';
import { useSocket } from './socket';
import { an } from 'vitest/dist/reporters-5f784f42';

/**
 * This can only be called from a component within the context of the MultiplayerProvider
 */
export const useMultiplayerClient = () => {
  const { closeConnection, sendMessage, status } = useSocket();

  const createRoom = (numRounds: number) => {
    sendMessage(CREATE_ROOM_MESSAGE, { numRounds });
  };

  const joinRoom = (roomId: string, name: string) => {
    sendMessage(JOIN_ROOM_MESSAGE, { roomId, name });
  };

  const startGame = (roomId: string) => {
    sendMessage(START_GAME_MESSAGE, { roomId });
  };

  const leaveRoom = () => {
    sendMessage(LEAVE_ROOM_MESSAGE, { });
  }

  const answerQuestion = (roomId: string, questionIndex: number, answerIndexes: number[]) => {
    sendMessage(ANSWER_QUESTION_MESSAGE, { roomId, questionIndex, answerIndexes });
  }

  return {
    connectionStatus: status,
    createRoom,
    joinRoom,
    startGame,
    leaveRoom,
    answerQuestion,
  };
};
