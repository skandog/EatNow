import React, { useState, useContext } from "react";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

import {
  AccountBackgroundImage,
  AccountContainer,
  AccountCover,
  AuthInput,
} from "../components/account.styles";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin } = useContext(AuthenticationContext);

  return (
    <AccountBackgroundImage>
      <AccountCover />
      <AccountContainer>
        <AuthInput
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Spacer position={"top"} size="large">
          <AuthInput
            label="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </Spacer>
      </AccountContainer>
    </AccountBackgroundImage>
  );
};
