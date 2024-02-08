import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { renderHook } from '@testing-library/react';

import { setupStore } from '@store/store';
import { wrapMultiplayerProvider } from '@testing/helpers/multiplayer-helpers';
import { useLeaveRoomResponseHandlers } from '../leave-room-handlers';

const originalConsoleLog = console.log;
const originalConsoleError = console.error;

describe('Create Room Handlers', () => {
  beforeEach(() => {
    console.log = vi.fn();
    console.error = vi.fn();
  });

  afterEach(() => {
    console.log = originalConsoleLog;
    console.error = originalConsoleError;
    vi.resetAllMocks();
  });

  it('should call console log', () => {
    const store = setupStore();
    const { result, unmount } = renderHook(() => useLeaveRoomResponseHandlers(), {
      wrapper: wrapMultiplayerProvider({ store }),
    });

    result.current.leaveRoomResponseHandler();

    expect(store.getState().room.roomId).toEqual(null);
    unmount();
  });

  it('should call console error', () => {
    const store = setupStore();
    const { result, unmount } = renderHook(() => useLeaveRoomResponseHandlers(), {
      wrapper: wrapMultiplayerProvider({ store }),
    });

    result.current.leaveRoomErrorResponseHandler({ errorCode: 'test' });

    expect(console.error).toHaveBeenCalled();
    unmount();
  });
});
