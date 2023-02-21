import React from "react";
import { View, Text, ImageBackground } from "react-native";

import { AccountBackgroundImage } from "../components/account.styles";

export const AccountScreen = () => {
  return (
    <AccountBackgroundImage>
      <View>
        <Text>Account Screen</Text>
      </View>
    </AccountBackgroundImage>
  );
};
