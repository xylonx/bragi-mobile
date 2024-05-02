import React from "react";
import { ViewProps } from "react-native";
import styled from "styled-components/native";
import { useDefaultStyles } from "../hooks/providers/theme";

const Container = styled.View`
  height: 1px;
  flex: 1;
`;

const Divider: React.FC<ViewProps> = ({ style }) => {
  const defaultStyles = useDefaultStyles();
  return <Container style={[defaultStyles.divider, style]} />;
};

export default Divider;
