import styled from "styled-components/native";
import { ImageBackground, View } from "react-native";
import { Button, TextInput } from "react-native-paper";

import { colors } from "../../../infrastructure/theme/colors";

const image = require("../../../../assets/home-background.jpg");

export const AccountBackgroundImage = styled(ImageBackground).attrs({
  source: image,
  resizeMode: "cover",
})`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const AccountCover = styled(View)`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(215, 215, 255, 0.4);
`;

export const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${(props) => props.theme.space.l};
  margin-top: ${(props) => props.theme.space.s};
`;

export const AuthButton = styled(Button).attrs({
  buttonColor: colors.brand.primary,
})`
  padding: ${(props) => props.theme.space.m};
`;

export const AuthInput = styled(TextInput)`
  width: 320px;
`;
