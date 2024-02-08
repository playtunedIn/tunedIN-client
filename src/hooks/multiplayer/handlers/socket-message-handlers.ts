import { useRecoverRoomSessionHandlers } from '@hooks/multiplayer/handlers/message-handlers/recover-room-handlers';
import { useCreateRoomResponseHandlers } from './message-handlers/create-room-handlers';
import { useExitRoomResponseHandlers } from './message-handlers/exit-room-handlers';
import { useJoinRoomResponseHandlers } from '@hooks/multiplayer/handlers/message-handlers/join-room-handlers';
import { useStartGameResponseHandlers } from '@hooks/multiplayer/handlers/message-handlers/start-game-handlers';
import { useSubscriberHandler } from './message-handlers/subscriber-updates/subscriber-handler';

export const useSocketMessageHandlers = (setNeedsRecovery: React.Dispatch<React.SetStateAction<boolean>>) => {
  const { createRoomResponseHandler, createRoomErrorResponseHandler } = useCreateRoomResponseHandlers();
  const { joinRoomResponseHandler, joinRoomErrorResponseHandler } = useJoinRoomResponseHandlers();
  const { startGameResponseHandler, startGameErrorResponseHandler } = useStartGameResponseHandlers();
  const { exitRoomResponseHandler, exitRoomErrorResponseHandler } = useExitRoomResponseHandlers();
  const { recoverRoomSessionResponseHandler, recoverRoomSessionErrorResponseHandler } =
    useRecoverRoomSessionHandlers(setNeedsRecovery);
  const { subscribedMessageResponse } = useSubscriberHandler();

  /**
   * Key names must match the response type for the handler
   */
  const messageHandlers = {
    createRoomResponse: createRoomResponseHandler,
    createRoomErrorResponse: createRoomErrorResponseHandler,
    joinRoomResponse: joinRoomResponseHandler,
    joinRoomErrorResponse: joinRoomErrorResponseHandler,
    startGameResponse: startGameResponseHandler,
    startGameErrorResponse: startGameErrorResponseHandler,
    exitRoomResponse: exitRoomResponseHandler,
    exitRoomErrorResponse: exitRoomErrorResponseHandler,
    recoverRoomSessionResponse: recoverRoomSessionResponseHandler,
    recoverRoomSessionErrorResponse: recoverRoomSessionErrorResponseHandler,
    subscriptionResponse: subscribedMessageResponse
  } as const;

  return { messageHandlers };
};
