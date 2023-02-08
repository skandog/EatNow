import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

export const RestaurantScreen = () => {
  return (
    <>
      <View style={styles.search}>
        <Searchbar />
        {/* <Text>Pearch</Text> */}
      </View>
      <View style={styles.list}>
        <RestaurantInfoCard />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: "white",
    padding: 16,
  },
  search: {
    backgroundColor: "green",
    padding: 16,
  },
});
