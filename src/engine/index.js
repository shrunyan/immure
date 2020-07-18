"use strict";

import hotkeys from "hotkeys-js";

export function start() {
  console.log("Engine:start");

  try {
    // const startInput = document.getElementById("startInput");

    // startInput.onclick = function () {

    // };
    // startInput.click();

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

      //   const press = ;
      //   press.then((something) => console.log(something));
    }

    // Works
    //   hotkeys("command+r,ctrl+r,command+shift+r,ctrl+shift+r", (event, handler) => {
    //     event.preventDefault();
    //     console.log("handle", handler.key, event);
    //   });

    //   hotkeys("up-arrow,right-arrow,down-arrow,left-arrow", (evt, handler) => {
    //     switch (handler.key) {
    //       case "up-arrow":
    //         console.log("up-arrow");
    //         break;
    //       default:
    //         alert(evt);
    //     }
    //   });
  } catch (err) {
    console.error(err);
  }
}
