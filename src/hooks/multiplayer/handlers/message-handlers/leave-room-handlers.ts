/**
 * TODO: These types are not accurate. Implement leave room handler in SPOT-49
 */

import { useAppDispatch } from '@hooks/store/app-store';
import { updateRoomId } from '@store/multiplayer/room-slice/room-slice';

interface LeaveRoomErrorResponse {
  errorCode: string;
}

export const useLeaveRoomResponseHandlers = () => {
  const dispatch = useAppDispatch();

  const leaveRoomResponseHandler = () => {
    dispatch(updateRoomId(null));
  };

  const leaveRoomErrorResponseHandler = (data: LeaveRoomErrorResponse) => {
    console.error(data);
  };

  return {
    leaveRoomResponseHandler,
    leaveRoomErrorResponseHandler,
  };
};
