import { AppRegistry } from "react-native";
import "react-native-gesture-handler";
import { enableScreens } from "react-native-screens";
import TrackPlayer from "react-native-track-player";
import { name as appName } from "./app.json";
import App from "./src/App";
import PlaybackService from "./src/utility/PlaybackService";

enableScreens();
AppRegistry.registerComponent(appName, () => App);
TrackPlayer.registerPlaybackService(() => PlaybackService);
