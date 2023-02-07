import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, StatusBar, Platform } from "react-native";

import { RestaurantScreen } from "./src/screens/restaurants.screen";

const isAndroid = Platform.OS === "android";
export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <RestaurantScreen />
      </SafeAreaView>

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
