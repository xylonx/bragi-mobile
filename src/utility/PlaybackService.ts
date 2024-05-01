import TrackPlayer, { Event } from "react-native-track-player";

const PlaybackService = async () => {
  TrackPlayer.addEventListener(Event.RemotePlay, () => {
    TrackPlayer.play();
  });

  TrackPlayer.addEventListener(Event.RemotePause, () => {
    TrackPlayer.pause();
  });

  TrackPlayer.addEventListener(Event.RemoteNext, () => {
    TrackPlayer.skipToNext();
  });

  TrackPlayer.addEventListener(Event.RemotePrevious, () => {
    TrackPlayer.skipToPrevious();
  });

  TrackPlayer.addEventListener(Event.RemoteStop, () => {
    TrackPlayer.reset();
  });

  TrackPlayer.addEventListener(Event.RemoteSeek, event => {
    TrackPlayer.seekTo(event.position);
  });

  /// TODO(xylonx): Playback reporting

  // TrackPlayer.addEventListener(Event.PlaybackActiveTrackChanged, async (e) => {
  //   const settings = store.getState().settings;

  //   // const settings =
  // });
};

export default PlaybackService;
