import React from "react";
import { StatusBar } from "react-native";

import Routes from "./src/routes";

export default () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7d40e7" />
      <Routes />
    </>
  );
};
