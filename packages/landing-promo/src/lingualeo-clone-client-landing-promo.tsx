import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";

import { AppRoot } from "./app";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: AppRoot,
});

export const { bootstrap, mount, unmount } = lifecycles;
