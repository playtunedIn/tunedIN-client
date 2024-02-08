import { useAppDispatch } from '@hooks/store/app-store';
import { PlayerState } from '@store/multiplayer/players-slice/players-slice.types';
import { updateQuestionsState } from '@store/multiplayer/questions-slice/questions-slice';
import { ReceivedQuestion } from '@store/multiplayer/questions-slice/questions-slice.types';
import { updateRoomErrorCode, updateRoomState } from '@store/multiplayer/room-slice/room-slice';
import { RoomStatus } from '@store/multiplayer/room-slice/room-slice.types';

export interface StartGameResponse {
  roomId: string;
  hostId: string;
  roomStatus: RoomStatus;
  players: PlayerState[];
  questionIndex: number;
  questions: ReceivedQuestion[];
}

export interface StartGameErrorResponse {
  errorCode: string;
}

export const useStartGameResponseHandlers = () => {
  const dispatch = useAppDispatch();

  const startGameResponseHandler = (data: StartGameResponse) => {
    dispatch(
      updateRoomState({
        roomId: data.roomId,
        roomStatus: data.roomStatus
      })
    );

    dispatch(
      updateQuestionsState({
        questions: data.questions,
        questionIndex: data.questionIndex
      })
    )
  }

  const startGameErrorResponseHandler = (data: StartGameErrorResponse) => {
    dispatch(updateRoomErrorCode(data.errorCode));
  };

  return {
    startGameResponseHandler,
    startGameErrorResponseHandler,
  };
};
