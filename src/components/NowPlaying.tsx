import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { IconPlayerPause } from "@tabler/icons-react-native";
import React, { useCallback, useEffect, useRef } from "react";
import {
  ActivityIndicator,
  Animated,
  Dimensions,
  Pressable,
} from "react-native";
import TrackPlayer, {
  State,
  usePlaybackState,
  useProgress,
} from "react-native-track-player";
import styled from "styled-components/native";
import { useDefaultStyles } from "../hooks/providers/theme";
import useCurrentTrack from "../hooks/useCurrentTrack";
import usePrevious from "../hooks/usePrevious";
import ColoredBlurView from "./ColoredBlurView";
import Image from "./Image";
import Progress, { calculateProgressTranslation } from "./Progress";
import ShadowWrapper from "./Shadow";
import { Text } from "./Typography";

const NOW_PLAYING_POPOVER_MARGIN = 6;
const NOW_PLAYING_POPOVER_WIDTH =
  Dimensions.get("screen").width - 2 * NOW_PLAYING_POPOVER_MARGIN;

const Container = styled.ScrollView`
  position: absolute;
  left: ${NOW_PLAYING_POPOVER_MARGIN}px;
  right: ${NOW_PLAYING_POPOVER_MARGIN}px;
  border-radius: 8px;
  overflow: visible;
`;

const InnerContainer = styled.TouchableOpacity`
  padding: 12px;
  overflow: hidden;
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

const Cover = styled(Image)`
  height: 42px;
  width: 42px;
  border-radius: 4px;
  margin-right: 12px;
`;

const TrackNameContainer = styled.View`
  flex: 1;
  margin-right: 12px;
`;

const ActionButtonContainer = styled.Pressable`
  margin-right: 8px;
`;

const ActionButton: React.FC = () => {
  const { state } = usePlaybackState();
  const defaultStyles = useDefaultStyles();

  switch (state) {
    case State.Playing:
      return (
        <Pressable onPress={TrackPlayer.pause}>
          <IconPlayerPause size={21} color={defaultStyles.text.color} />
        </Pressable>
      );

    case State.Stopped:
    case State.Paused:
      return (
        <Pressable onPress={TrackPlayer.play}>
          <IconPlayerPause size={21} color={defaultStyles.text.color} />
        </Pressable>
      );

    case State.Buffering:
    case State.Loading:
      return (
        <Pressable onPress={TrackPlayer.pause}>
          <ActivityIndicator />
        </Pressable>
      );
    default:
      return null;
  }
};

const NowPlaying: React.FC<{ offset?: number }> = ({ offset = 0 }) => {
  // styles related
  const defaultStyles = useDefaultStyles();
  const tabBarHeight = useBottomTabBarHeight();

  // navigation related
  const navigation = useNavigation();

  // track
  const { index, track } = useCurrentTrack();
  const { buffered, position } = useProgress();

  const previousBuffered = usePrevious(buffered);
  const previousPosition = usePrevious(position);

  const bufferAnimation = useRef(new Animated.Value(0));
  const progressAnimation = useRef(new Animated.Value(0));

  useEffect(() => {
    const duration = (track?.duration || 0) / 10_000_000;

    if (duration === 0) {
      return;
    }

    // First calculate the new value for the buffer animation. Then, check
    // whether the buffered state is smaller than the previous one, in which
    // case we'll just set the value without animation
    const bufferValue = calculateProgressTranslation(
      buffered,
      duration,
      NOW_PLAYING_POPOVER_WIDTH,
    );
    if (buffered < (previousBuffered || 0)) {
      bufferAnimation.current.setValue(bufferValue);
    } else {
      Animated.timing(bufferAnimation.current, {
        toValue: bufferValue,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }

    // Then, do the same for the progress animation
    const progressValule = calculateProgressTranslation(
      position,
      duration,
      NOW_PLAYING_POPOVER_WIDTH,
    );
    if (position < (previousPosition || 0)) {
      progressAnimation.current.setValue(progressValule);
    } else {
      Animated.timing(progressAnimation.current, {
        toValue: progressValule,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  }, [
    buffered,
    position,
    previousBuffered,
    previousPosition,
    index,
    track?.duration,
  ]);

  const handleClickNowPlaying = useCallback(() => {
    navigation.goBack();
    // navigation.navigate("Player");
  }, [navigation]);

  if (!track) {
    return null;
  }

  // TODO(xylonx): fill data
  const coverURI = "";
  const title =
    "长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长歌名";
  const subtitle = "早稻叽";

  // if (!track) {
  //   return null;
  // }

  return (
    <Container
      style={{
        bottom: tabBarHeight + NOW_PLAYING_POPOVER_MARGIN + offset,
      }}>
      <ColoredBlurView style={{ borderRadius: 8 }}>
        <InnerContainer onPress={handleClickNowPlaying} activeOpacity={0.5}>
          <ShadowWrapper>
            <Cover uri={coverURI} style={defaultStyles.imageBackground} />
          </ShadowWrapper>

          <TrackNameContainer>
            <Text numberOfLines={1}>{title}</Text>
            <Text style={{ opacity: 0.5 }} numberOfLines={1}>
              {subtitle}
            </Text>
          </TrackNameContainer>

          <ActionButtonContainer>
            <ActionButton />
          </ActionButtonContainer>

          <Progress
            style={[
              { transform: [{ translateX: bufferAnimation.current }] },
              defaultStyles.themeBackground,
            ]}
            opacity={0.15}
            stroke={4}
          />
          <Progress
            style={[
              { transform: [{ translateX: progressAnimation.current }] },
              defaultStyles.themeBackground,
            ]}
            stroke={4}
          />
        </InnerContainer>
      </ColoredBlurView>
    </Container>
  );
};

export default NowPlaying;
