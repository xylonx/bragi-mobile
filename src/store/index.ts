// import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
// import {
//   PersistConfig,
//   PersistState,
//   persistReducer,
//   persistStore,
// } from "redux-persist";
// import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import { settingsReducer } from "./settings";

const reducers = combineReducers({
  settings: settingsReducer,
  // music: music.reducer,
  // downloads: downloads.reducer,
  // sleepTimer: sleepTimer.reducer,
});

// export type AppState = ReturnType<typeof reducers> & { _persist: PersistState };
export type AppState = ReturnType<typeof reducers>;

// const persistConfig: PersistConfig<Omit<AppState, "_persist">> = {
//   key: "root",
//   storage: AsyncStorage,
//   version: 1,
//   stateReconciler: autoMergeLevel2,
// };

// const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type AsyncThunkAPI = { state: AppState; dispatch: AppDispatch };
export const useTypedSelector: TypedUseSelectorHook<AppState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;

// export const persistedStore = persistStore(store);

export default store;
