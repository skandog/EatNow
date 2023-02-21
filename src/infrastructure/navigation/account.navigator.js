import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { Text, View } from "react-native";
import { AccountScreen } from "../../features/account/screens/account.screen";

const Stack = createStackNavigator();

export const AccountNavigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Main" component={AccountScreen} />
      <Stack.Screen
        name="Login"
        component={() => (
          <View>
            <Text>Login Screen</Text>
          </View>
        )}
      />
    </Stack.Navigator>
  );
};
