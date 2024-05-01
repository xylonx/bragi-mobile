import { BlurView, BlurViewProps } from "@react-native-community/blur";
import React, { PropsWithChildren } from "react";
import { Platform, View, useColorScheme } from "react-native";
import { useTypedSelector } from "../store";
import { ColorScheme } from "../store/settings";

const majorPlatformVersion =
  typeof Platform.Version === "string"
    ? parseInt(Platform.Version, 10)
    : Platform.Version;

const ColoredBlurView: React.FC<PropsWithChildren<BlurViewProps>> = props => {
  const systemScheme = useColorScheme();
  const userScheme = useTypedSelector(state => state.settings.colorScheme);
  const scheme = userScheme === ColorScheme.System ? systemScheme : userScheme;

  return Platform.OS === "ios" ? (
    <BlurView
      {...props}
      blurType={
        Platform.OS === "ios" && majorPlatformVersion >= 13
          ? scheme === "dark"
            ? "materialDark"
            : "materialLight"
          : scheme === "dark"
          ? "extraDark"
          : "xlight"
      }
    />
  ) : (
    <View
      {...props}
      style={[
        props.style,
        {
          backgroundColor: scheme === "light" ? "#f6f6f6fb" : "#333333fb",
        },
      ]}
    />
  );
};

export default ColoredBlurView;
