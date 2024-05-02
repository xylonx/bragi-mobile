import React, { useCallback, useRef } from "react";
import { Platform, TextInput, TextInputProps } from "react-native";
import styled, { css } from "styled-components/native";
import { useDefaultStyles } from "../hooks/providers/theme";

export interface InputProps extends TextInputProps {
  startIcon?: React.ReactNode;
  tailIcon?: React.ReactNode;
}

const Container = styled.Pressable<{
  hasStartIcon?: boolean;
  hasTailIcon?: boolean;
}>`
  position: relative;
  margin: 6px 0;
  border-radius: 12px;
  display: flex;

  ${Platform.select({
    ios: css`
      padding: 12px;
    `,
    android: css`
      padding: 4px 12px;
    `,
  })}

  ${({ hasStartIcon }) =>
    hasStartIcon &&
    css`
      padding-left: 36px;
    `}

    ${({ hasTailIcon }) =>
    hasTailIcon &&
    css`
      padding-right: 36px;
    `}
`;

const IconWrapper = styled.View<{ position: "left" | "right" }>`
  position: absolute;
  top: 0;
  bottom: 0;

  ${({ position }) =>
    position === "left"
      ? css`
          left: 0;
          padding-left: 12px;
        `
      : css`
          right: 0;
          padding-right: 12px;
        `}

  display: flex;
  justify-content: center;
`;

const Input: React.FC<InputProps> = ({
  style,
  startIcon,
  tailIcon,
  ...inputProps
}) => {
  const defaultStyles = useDefaultStyles();
  const inputRef = useRef<TextInput | null>(null);

  const handlePress = useCallback(() => inputRef.current?.focus(), []);

  return (
    <Container
      style={[defaultStyles.input, style]}
      onPress={handlePress}
      hasStartIcon={!!startIcon}
      hasTailIcon={!!tailIcon}>
      {startIcon && <IconWrapper position="left">{startIcon}</IconWrapper>}

      <TextInput
        {...inputProps}
        style={[defaultStyles.text, { margin: 0, padding: 0 }]}
        ref={inputRef}
      />

      {tailIcon && <IconWrapper position="right">{tailIcon}</IconWrapper>}
    </Container>
  );
};

export default Input;
