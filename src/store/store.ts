import type { EnhancedStore, PreloadedState } from '@reduxjs/toolkit';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { persistStore, persistReducer, Persistor } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import playersReducers from './multiplayer/players-slice/players-slice';
import questionsReducers from './multiplayer/questions-slice/questions-slice';
import roomReducers from './multiplayer/room-slice/room-slice';

const persistConfig = {
  key: 'root',
  storage,
}


export const rootReducer = combineReducers({
  players: playersReducers,
  questions: questionsReducers,
  room: roomReducers,
});

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const setupStore = (preloadedState?: PreloadedState<RootState>): {store: EnhancedStore, persistor: Persistor} => {
  const store = configureStore({
    reducer: persistedReducer,
    preloadedState,
  });
  const persistor = persistStore(store)
  return {store, persistor};
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['store']['dispatch'];
