import { createAction } from "@reduxjs/toolkit";

export const setServerCredentials = createAction<{
  access_token: string;
  user_id: string;
  uri: string;
  device_id: string;
}>("SET_SERVER_CREDENTIALS");

export const setOnboardingStatus = createAction<boolean>(
  "SET_ONBOARDING_STATUS"
);
