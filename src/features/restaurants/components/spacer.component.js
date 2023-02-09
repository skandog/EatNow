import React from "react";
import { View } from "react-native";
import styled from "styled-components";

const TopSmall = styled.View`
  margin-top: ${(props) => props.theme.space.s};
`;

const TopMedium = styled.View`
  margin-top: ${(props) => props.theme.space.m};
`;

const TopLarge = styled.View`
  margin-top: ${(props) => props.theme.space.l};
`;

const LeftSmall = styled.View`
  margin-left: ${(props) => props.theme.space.s};
`;

const LeftMedium = styled.View`
  margin-left: ${(props) => props.theme.space.m};
`;

const LeftLarge = styled.View`
  margin-left: ${(props) => props.theme.space.l};
`;

export const Spacer = ({ variant }) => {
  if (variant === "top.medium") {
    return <TopMedium />;
  }
  if (variant === "top.large") {
    return <TopLarge />;
  }
  if (variant === "left.small") {
    return <LeftSmall />;
  }
  if (variant === "left.medium") {
    return <LeftMedium />;
  }
  if (variant === "left.large") {
    return <LeftLarge />;
  }
  return <TopSmall />;
};
