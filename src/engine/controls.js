"use strict";

import hotkeys from "hotkeys-js";

export function controls() {
  console.log("Controls:init");
  hotkeys("up-arrow,right-arrow,down-arrow,left-arrow", (evt, handler) => {
    switch (handler.key) {
      case "up-arrow":
        console.log("up-arrow");
        break;
      default:
        alert(evt);
    }
  });
}
