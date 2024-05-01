import {
  DarkTheme as DefaultDarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import { ColorSchemeName, StyleSheet } from "react-native";

const generateStyles = (scheme: ColorSchemeName) => {
  return StyleSheet.create({
    text: {
      color: scheme === "dark" ? "#fff" : "#000",
      fontSize: 14,
      fontFamily: "Inter",
    },
    textHalfOpacity: {
      color: scheme === "dark" ? "#ffffff88" : "#00000088",
      fontSize: 14,
    },
    textQuarterOpacity: {
      color: scheme === "dark" ? "#ffffff44" : "#00000044",
      fontSize: 14,
    },
    view: {
      backgroundColor: scheme === "dark" ? "#111" : "#fff",
    },
    border: {
      borderColor: scheme === "dark" ? "#262626" : "#ddd",
    },
    activeBackground: {
      backgroundColor: `#FF3C00${scheme === "dark" ? "26" : "16"}`,
    },
    imageBackground: {
      backgroundColor: scheme === "dark" ? "#191919" : "#eee",
      borderWidth: 0.5,
      borderColor: scheme === "dark" ? "#262626" : "#ddd",
    },
    modal: {
      backgroundColor: scheme === "dark" ? "#000" : "#fff",
    },
    modalInner: {
      backgroundColor: scheme === "dark" ? "#000" : "#fff",
    },
    button: {
      backgroundColor: scheme === "dark" ? "#ffffff09" : "#00000009",
    },
    input: {
      backgroundColor: scheme === "dark" ? "#191919" : "#f3f3f3",
      color: scheme === "dark" ? "#fff" : "#000",
    },
    stackHeader: {
      color: scheme === "dark" ? "white" : "black",
    },
    icon: {
      color: scheme === "dark" ? "#ffffff4d" : "#0000004d",
    },
    divider: {
      backgroundColor: scheme === "dark" ? "#333" : "#eee",
    },
    filter: {
      backgroundColor: scheme === "dark" ? "#191919" : "#f3f3f3",
    },
    themeColor: {
      color: "#FF3C00",
    },
    themeColorHalfOpacity: {
      color: "#FF3C0088",
    },
    themeColorQuarterOpacity: {
      color: "#FF3C0044",
    },
    themeBackground: {
      backgroundColor: "#FF3C00",
    },
  });
};

export const themes: Record<
  "dark" | "light",
  ReturnType<typeof generateStyles>
> = {
  dark: generateStyles("dark"),
  light: generateStyles("light"),
};

export const LightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: themes.light.view.backgroundColor,
  },
};

export const DarkTheme = {
  ...DefaultDarkTheme,
  colors: {
    ...DefaultDarkTheme.colors,
    background: themes.dark.view.backgroundColor,
  },
};
