"use strict";

import { controls } from "./controls";

export function start() {
  console.log("Engine:start");

  try {
    if (document.fullscreenEnabled) {
      document.documentElement.requestFullscreen();

      // requires fullscreen. prevent default browser key commands. e.g. ctrl + w
      navigator.keyboard.lock();

      // prevent right click context menu
      document.addEventListener("contextmenu", (evt) => {
        console.log("hahaha no escape");

        // Cancel the event
        // If you prevent default behavior in Mozilla Firefox prompt will always be shown
        evt.preventDefault();
        // Chrome requires returnValue to be set
        evt.returnValue = "";
      });

      controls();
    }

    // Works
    //   hotkeys("command+r,ctrl+r,command+shift+r,ctrl+shift+r", (event, handler) => {
    //     event.preventDefault();
    //     console.log("handle", handler.key, event);
    //   });
  } catch (err) {
    console.error(err);
  }
}
