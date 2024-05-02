import React from "react";
import { Platform } from "react-native";
import styled, { css } from "styled-components/native";
import TouchableHandler from "../../../components/TouchableHandler";
import { Text } from "../../../components/Typography";
import useCurrentTrack from "../../../hooks/useCurrentTrack";

const TrackContainer = styled.View<{ isPlaying: boolean; small?: boolean }>`
  padding: 12px 4px;
  flex-direction: row;
  border-radius: 6px;
  align-items: flex-start;

  ${props =>
    props.isPlaying &&
    css`
      margin: 0 -12px;
      padding: 12px 16px;
    `}

  ${props =>
    props.small &&
    css`
      padding: ${Platform.select({ ios: "8px 4px", android: "4px" })};
    `}
`;

const TrackCard: React.FC<{ id: string }> = ({ id }) => {
  const { track: currentTrack } = useCurrentTrack();

  const selectTrack = (id: string) => {
    console.log(id);
  };

  return (
    <TouchableHandler id={id} onPress={selectTrack}>
      <TrackContainer isPlaying={!!currentTrack}>
        <Text></Text>
      </TrackContainer>
    </TouchableHandler>
  );
};

export default TrackCard;
