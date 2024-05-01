import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet } from "react-native";
import ColoredBlurView from "../components/ColoredBlurView";
import { useDefaultStyles } from "../hooks/theme";
import Home from "../screens/Home";
import Search from "./Search";
import Setting from "./Setting";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Main: React.FC = () => {
  const styles = useDefaultStyles();

  // const isOnboardingComplete = useTypedSelector(
  //   (state) => state.settings.isOnboardingComplete
  // );

  // if (!isOnboardingComplete) {
  //   return <Onboarding />;
  // }

  return (
    <Tab.Navigator
      screenOptions={() => ({
        // tabBarIcon: ({ color, size }) => {
        //   switch (route.name) {
        //     case "HomeTab":
        //       return (
        //         <HomeIcon fill={color} height={size - 4} width={size - 4} />
        //       );
        //     case "SearchTab":
        //       return (
        //         <SearchIcon fill={color} height={size - 4} width={size - 4} />
        //       );
        //     case "SettingTab":
        //       return (
        //         <GearIcon fill={color} height={size - 1} width={size - 1} />
        //       );
        //     default:
        //       return null;
        //   }
        // },
        tabBarActiveTintColor: styles.themeColor.color,
        tabBarInactiveTintColor: "gray",
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { position: "absolute" },
        tabBarBackground: () => (
          <ColoredBlurView style={StyleSheet.absoluteFill} />
        ),
      })}>
      <Tab.Screen
        name="HomeTab"
        component={Home}
        options={{ tabBarLabel: "Home", tabBarLabelPosition: "below-icon" }}
      />
      <Tab.Screen
        name="SearchTab"
        component={Search}
        options={{ tabBarLabel: "Search", tabBarLabelPosition: "below-icon" }}
      />
      <Tab.Screen
        name="SettingTab"
        component={Setting}
        options={{ tabBarLabel: "Setting", tabBarLabelPosition: "below-icon" }}
      />
    </Tab.Navigator>
  );
};

const Routes: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Main" component={Main} />
      {/* FIXME(xylonx): use player screen */}
      {/* <Stack.Screen name="Player" component={Main} /> */}
    </Stack.Navigator>
  );
};

export default Routes;
