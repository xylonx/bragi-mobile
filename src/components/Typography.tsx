import React, { PropsWithChildren } from "react";
import { Text as BaseText, TextProps } from "react-native";
import styled from "styled-components/native";
import { useDefaultStyles } from "../hooks/providers/theme";

export function Text(props: PropsWithChildren<TextProps>) {
  const defaultStyles = useDefaultStyles();

  return <BaseText {...props} style={[defaultStyles.text, props.style]} />;
}

export const Header = styled(Text)`
  margin: 0 0 6px 0;
  font-size: 28px;
  font-weight: 500;
  letter-spacing: -0.3px;
`;

export const SubHeader = styled(Text)`
  font-size: 16px;
  margin: 0 0 6px 0;
  font-weight: 400;
  opacity: 0.5;
`;

export const Paragraph = styled(Text)`
  opacity: 0.5;
  font-size: 12px;
  line-height: 20px;
`;
