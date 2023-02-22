import React from "react";
import { View, Text, ImageBackground } from "react-native";

import {
  AccountBackgroundImage,
  AccountCover,
} from "../components/account.styles";

export const AccountScreen = () => {
  return (
    <AccountBackgroundImage>
      <AccountCover />
      <View>
        <Text>Account Screen</Text>
      </View>
    </AccountBackgroundImage>
  );
};
