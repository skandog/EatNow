import React, { useState, useContext } from "react";

import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

import {
  AccountBackgroundImage,
  AccountContainer,
  AccountCover,
  AuthButton,
  AuthInput,
  ErrorContainer,
  Title,
} from "../components/account.styles";

export const RegisterSceen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const { onRegister, error } = useContext(AuthenticationContext);

  return (
    <AccountBackgroundImage>
      <AccountCover />
      <Title>EatNow</Title>

      <AccountContainer>
        <AuthInput
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Spacer position={"top"} size="large">
          <AuthInput
            label="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
          />
        </Spacer>
        <Spacer position={"top"} size="large">
          <AuthInput
            label="Repeat Password"
            value={repeatedPassword}
            onChangeText={(text) => setRepeatedPassword(text)}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
          />
        </Spacer>
        {error && (
          <ErrorContainer>
            <Text variant="error">{error}</Text>
          </ErrorContainer>
        )}
        <Spacer size="large">
          <AuthButton
            icon="email"
            mode="contained"
            onPress={() => onRegister(email, password, repeatedPassword)}
          >
            Register
          </AuthButton>
        </Spacer>
      </AccountContainer>
      <Spacer size="large">
        <AuthButton mode="contained" onPress={() => navigation.goBack()}>
          Back
        </AuthButton>
      </Spacer>
    </AccountBackgroundImage>
  );
};
