import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Platform,
} from "react-native";

const isAndroid = Platform.OS === "android";
export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Text>Pearch</Text>
        </View>
        <View style={styles.list}>
          <Text>List</Text>
        </View>
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
  list: {
    flex: 1,
    backgroundColor: "blue",
    padding: 16,
  },
  search: {
    backgroundColor: "green",
    padding: 16,
  },
});
