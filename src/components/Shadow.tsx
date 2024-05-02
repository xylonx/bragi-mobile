import React, { PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";

export const shadow = StyleSheet.create({
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.62,
    elevation: 4,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4.65,
    elevation: 6,
  },
});

type variantProp = "small" | "medium";

const shadowMap: Record<variantProp, StyleSheet.NamedStyles<unknown>> = {
  small: shadow.small,
  medium: shadow.medium,
};

const ShadowWrapper: React.FC<PropsWithChildren<{ variant?: variantProp }>> = ({
  children,
  variant = "small",
}) => <View style={shadowMap[variant]}>{children}</View>;

export default ShadowWrapper;
