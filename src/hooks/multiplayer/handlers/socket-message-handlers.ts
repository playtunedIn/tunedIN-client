import { useRecoverRoomSessionHandlers } from '@hooks/multiplayer/handlers/message-handlers/recover-room-handlers';
import { useCreateRoomResponseHandlers } from './message-handlers/create-room-handlers';
import { useLeaveRoomResponseHandlers } from './message-handlers/leave-room-handlers';
import { useJoinRoomResponseHandlers } from '@hooks/multiplayer/handlers/message-handlers/join-room-handlers';
import { useStartGameResponseHandlers } from '@hooks/multiplayer/handlers/message-handlers/start-game-handlers';
import { useSubscriberHandler } from './message-handlers/subscriber-updates/subscriber-handler';

export const useSocketMessageHandlers = (setNeedsRecovery: React.Dispatch<React.SetStateAction<boolean>>) => {
  const { createRoomResponseHandler, createRoomErrorResponseHandler } = useCreateRoomResponseHandlers();
  const { joinRoomResponseHandler, joinRoomErrorResponseHandler } = useJoinRoomResponseHandlers();
  const { leaveRoomResponseHandler, leaveRoomErrorResponseHandler } = useLeaveRoomResponseHandlers();
  const { startGameErrorResponseHandler } = useStartGameResponseHandlers();
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
    leaveRoomResponse: leaveRoomResponseHandler,
    leaveRoomErrorResponse: leaveRoomErrorResponseHandler,
    startGameErrorResponse: startGameErrorResponseHandler,
    recoverRoomSessionResponse: recoverRoomSessionResponseHandler,
    recoverRoomSessionErrorResponse: recoverRoomSessionErrorResponseHandler,
    subscriptionResponse: subscribedMessageResponse
  } as const;

  return { messageHandlers };
};
