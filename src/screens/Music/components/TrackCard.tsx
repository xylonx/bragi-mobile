import React from "react";
import styled from "styled-components/native";
import { Provider } from "../../../api";
import Image from "../../../components/Image";
import ProviderIcon from "../../../components/ProviderIcon";
import ShadowWrapper from "../../../components/Shadow";
import TouchableHandler from "../../../components/TouchableHandler";
import { Text } from "../../../components/Typography";
import { useDefaultStyles } from "../../../hooks/providers/theme";

export const exampleCardInfo: TrackCardInfo = {
  id: "2050454093",
  provider: "netease",

  cover:
    "https://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
  title: "七友",
  subtitle: "早稻叽",
};

export interface TrackCardInfo {
  id: string;
  provider: Provider;

  cover: string;
  title: string;
  subtitle: string;
}

export interface TrackCardProps extends TrackCardInfo {
  onPress: (id: string) => void;
  onLongPress?: (id: string) => void;
}

const TrackContainer = styled.View`
  margin: 5px 10px;
  padding: 12px 8px;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
`;

const Cover = styled(Image)`
  position: relative;

  height: 64px;
  width: 64px;
  border-radius: 8px;
  margin-right: 12px;
`;

const BadgeContainer = styled.View`
  position: absolute;
  right: 0;
  bottom: 0;
  border-radius: 100%;
`;

const TrackInfoContainer = styled.View`
  flex: 1;
  gap: 6px;
  justify-content: space-around;
`;

const TrackCard: React.FC<TrackCardProps> = ({
  id,
  provider,

  cover,
  title,
  subtitle,

  onPress,
  onLongPress,
}) => {
  const defaultStyles = useDefaultStyles();

  return (
    <TouchableHandler id={id} onPress={onPress} onLongPress={onLongPress}>
      <ShadowWrapper variant="medium">
        <TrackContainer style={{ backgroundColor: defaultStyles.card.color }}>
          <ShadowWrapper>
            <Cover uri={cover} style={defaultStyles.imageBackground}>
              <BadgeContainer>
                <ProviderIcon provider={provider} size={20} />
              </BadgeContainer>
            </Cover>
          </ShadowWrapper>

          <TrackInfoContainer>
            <Text numberOfLines={1}>{title}</Text>
            <Text numberOfLines={1} style={{ opacity: 0.5 }}>
              {subtitle}
            </Text>
          </TrackInfoContainer>
        </TrackContainer>
      </ShadowWrapper>
    </TouchableHandler>
  );
};

export default TrackCard;
