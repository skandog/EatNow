import React from "react";
import {
  AccountBackgroundImage,
  AccountContainer,
  AccountCover,
} from "../components/account.styles";

export const LoginScreen = () => {
  return (
    <AccountBackgroundImage>
      <AccountCover />
      <AccountContainer />
    </AccountBackgroundImage>
  );
};
