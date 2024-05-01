// import ColoredBlurView from "@/components/ColoredBlurView";
// import { useDefaultStyles } from "@/hooks/theme";
// import { createStackNavigator } from "@react-navigation/stack";
// import React, { useState } from "react";
// import { StyleSheet } from "react-native";
// import { GestureHandlerRootView } from "react-native-gesture-handler";
//
// const Stack = createStackNavigator();
//
// const SearchStack: React.FC = () => {
//   const defaultStyles = useDefaultStyles();
//   const [isInitialRoute, setIsInitialRoute] = useState(true);
//
//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <Stack.Navigator
//         initialRouteName="Search"
//         screenOptions={{
//           headerTintColor: defaultStyles.themeColor.color,
//           headerTitleStyle: defaultStyles.stackHeader,
//           cardStyle: defaultStyles.view,
//           headerTransparent: true,
//           headerBackground: () => (
//             <ColoredBlurView style={StyleSheet.absoluteFill} />
//           ),
//         }}
//         screenListeners={{
//           state: (e) => {
//             const {
//               state: { routes },
//             } = e.data as {
//               state: { routes?: { key: string; name: string }[] };
//             };
//             setIsInitialRoute(routes?.length === 1);
//           },
//         }}
//       >
//         {/* <Stack.Screen
//           name="Search"
//           component={Search}
//           // options={{ headerTitle: t("search"), headerShown: false }}
//         />
//         <Stack.Screen
//           name="Album"
//           component={Album}
//           // options={{ headerTitle: t("album") }}
//         /> */}
//       </Stack.Navigator>
//       <NowPlaying offset={isInitialRoute ? 64 : 0} />
//     </GestureHandlerRootView>
//   );
// };
//
// export default SearchStack;
//
import React from "react";
import styled from "styled-components/native";
import { Header } from "../../components/Typography";

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
`;

const Search: React.FC = () => {
  return (
    <Container>
      <Header>{"Search"}</Header>
    </Container>
  );
};

export default Search;
