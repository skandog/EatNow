import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, StatusBar, Platform } from "react-native";
import styled from "styled-components";

import { RestaurantScreen } from "./src/screens/restaurants.screen";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: "#fff";
  margin-top: ${(isAndroid) => (isAndroid ? StatusBar.currentHeight : 0)}px;
`;

const isAndroid = Platform.OS === "android";
export default function App() {
  return (
    <>
      <SafeArea>
        <RestaurantScreen />
      </SafeArea>

      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: isAndroid ? StatusBar.currentHeight : 0,
  },
});
