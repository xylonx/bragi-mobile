import React, { PropsWithChildren, useContext } from "react";
import { useColorScheme } from "react-native";
import { useTypedSelector } from "../store";
import { ColorScheme } from "../store/settings";
import { themes } from "../themes/Theme";

// Create context for supplying the theming information
export const ColorSchemeContext = React.createContext(themes.dark);

/**
 * This provider contains the logic for settings the right theme on the ColorSchemeContext.
 */
export function ColorSchemeProvider({ children }: PropsWithChildren) {
  const systemScheme = useColorScheme();
  const userScheme = useTypedSelector(state => state.settings.colorScheme);
  const scheme = userScheme === ColorScheme.System ? systemScheme : userScheme;
  const theme = themes[scheme || "light"];

  return (
    <ColorSchemeContext.Provider value={theme}>
      {children}
    </ColorSchemeContext.Provider>
  );
}

/**
 * Retrieves the default styles object in hook form
 */
export function useDefaultStyles() {
  return useContext(ColorSchemeContext);
}

interface DefaultStylesProviderProps {
  children: (defaultStyles: ReturnType<typeof useDefaultStyles>) => JSX.Element;
}

/**
 * A render props component to supply the defaultStyles object.
 */
export function DefaultStylesProvider(props: DefaultStylesProviderProps) {
  const defaultStyles = useDefaultStyles();

  return props.children(defaultStyles);
}
