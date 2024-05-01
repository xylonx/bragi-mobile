import { AppRegistry } from "react-native";
import "react-native-gesture-handler";
import { enableScreens } from "react-native-screens";
import TrackPlayer from "react-native-track-player";
import App from "./App";
import { name as appName } from "./app.json";
import PlaybackService from "./src/utility/PlaybackService";

enableScreens();
AppRegistry.registerComponent(appName, () => App);
TrackPlayer.registerPlaybackService(() => PlaybackService);
