import { createReducer } from "@reduxjs/toolkit";
import { setOnboardingStatus, setServerCredentials } from "./actions";

export enum ColorScheme {
  System = "system",
  Light = "light",
  Dark = "dark",
}

interface State {
  server?: {
    uri: string;
    access_token: string;
    device_id: string;
  };
  isOnboardingComplete: boolean;
  colorScheme: ColorScheme;
}

const initialState: State = {
  isOnboardingComplete: false,
  colorScheme: ColorScheme.System,
};

export const settingsReducer = createReducer(initialState, builder => {
  builder.addCase(setServerCredentials, (state, action) => ({
    ...state,
    server: action.payload,
  }));

  builder.addCase(setOnboardingStatus, (state, action) => ({
    ...state,
    isOnboardingComplete: action.payload,
  }));
});
