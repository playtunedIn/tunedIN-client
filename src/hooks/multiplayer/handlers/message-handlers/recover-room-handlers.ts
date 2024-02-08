import { useAppDispatch } from '@hooks/store/app-store';
import type { RoomState } from '@store/multiplayer/room-slice/room-slice.types';
import { updateRoomState } from '@store/multiplayer/room-slice/room-slice';
import { updatePlayersState } from '@store/multiplayer/players-slice/players-slice';
import { PlayersState } from '@store/multiplayer/players-slice/players-slice.types';
import { QuestionsState } from '@store/multiplayer/questions-slice/questions-slice.types';
import { updateQuestionsState } from '@store/multiplayer/questions-slice/questions-slice';

interface RecoverRoomSessionResponse {
  state: RoomState & PlayersState & QuestionsState;
}

interface recoverRoomSessionErrorResponse {
  errorCode: string;
}

export const useRecoverRoomSessionHandlers = (setNeedsRecovery: React.Dispatch<React.SetStateAction<boolean>>) => {
  const dispatch = useAppDispatch();

  const recoverRoomSessionResponseHandler = (data: RecoverRoomSessionResponse) => {
    dispatch(updateRoomState(data.state));
    dispatch(updatePlayersState(data.state))
    dispatch(updateQuestionsState(data.state))
    setNeedsRecovery(false);
  };

  const recoverRoomSessionErrorResponseHandler = (data: recoverRoomSessionErrorResponse) => {
    console.error(data);
  };

  return {
    recoverRoomSessionResponseHandler,
    recoverRoomSessionErrorResponseHandler,
  };
};
