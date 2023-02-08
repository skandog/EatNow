import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components";
import { ThemeProvider } from "styled-components/native";

import { RestaurantScreen } from "./src/screens/restaurants.screen";
import { theme } from "./src/infrastructure/theme";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.primary};
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

// Previous implementation of padding top - not sure about
// change, so leaving in case this is more semantic
// const isAndroid = Platform.OS === "android";
// margin-top: ${({ isAndroid }) => (isAndroid ? StatusBar.currentHeight : 0)}px;

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <SafeArea>
          <RestaurantScreen />
        </SafeArea>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
