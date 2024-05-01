import { NavigationContainer } from "@react-navigation/native";
import React, { PropsWithChildren, useEffect } from "react";
import { useColorScheme } from "react-native";
import TrackPlayer, { Capability } from "react-native-track-player";
import { Provider } from "react-redux";
import { ColorSchemeProvider } from "./hooks/theme";
import Routes from "./screens";
import store, { useTypedSelector } from "./store";
import { ColorScheme } from "./store/settings";
import { DarkTheme, LightTheme } from "./themes/Theme";
// import { PersistGate } from "redux-persist/integration/react";

const ThemedNavigationContainer: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const systemScheme = useColorScheme();
  const userScheme = useTypedSelector(state => state.settings.colorScheme);
  const scheme = userScheme === ColorScheme.System ? systemScheme : userScheme;

  return (
    <NavigationContainer theme={scheme === "dark" ? DarkTheme : LightTheme}>
      {children}
    </NavigationContainer>
  );
};

// Track whether the player has already been setup, so that we don't accidentally do it twice.
let hasSetupPlayer = false;

const App: React.FC = () => {
  useEffect(() => {
    const setupTrackPlayer = async () => {
      await TrackPlayer.setupPlayer();
      await TrackPlayer.updateOptions({
        capabilities: [
          Capability.Play,
          Capability.Pause,
          Capability.SkipToNext,
          Capability.SkipToPrevious,
          Capability.Stop,
          Capability.SeekTo,
        ],
        progressUpdateEventInterval: 5,
      });
    };

    if (!hasSetupPlayer) {
      setupTrackPlayer();
      hasSetupPlayer = true;
    }
  });

  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistedStore}> */}
      <ColorSchemeProvider>
        <ThemedNavigationContainer>
          <Routes />
        </ThemedNavigationContainer>
      </ColorSchemeProvider>
      {/* </PersistGate> */}
    </Provider>
  );
};

export default App;
