import { h, Component } from "preact";
import Router from "preact-router";
import { useState, useEffect, useRef } from "preact/hooks";
import cx from "classnames";

import { createCamera } from "../../engine/camera";
import { createAscii } from "../../engine/ascii";

import style from "./room.less";
export function Room(props, store) {
  // console.log("Room:render", props, store);

  const mirror = useRef(null);

  useEffect(() => {
    var ascii = createAscii();
    var camera = createCamera();

    camera.init({
      width: window.innerWidth,
      height: window.innerHeight,
      fps: 1,
      mirror: true,

      onFrame: function (canvas) {
        ascii.fromCanvas(canvas, {
          // contrast: 128,
          callback: function (asciiString) {
            mirror.current.innerHTML = asciiString;
          },
        });
      },

      onError: function (error) {
        console.log(error);
        throw error;
      },

      onNotSupported: function () {
        console.log("leave");
        throw error;
      },
    });

    camera.start();
  }, [mirror]);

  return (
    <room class={cx(style.Room)}>
      {/* <h1>NO ESCAPE</h1> */}
      {/* <video id="YourSoul" autoplay playsinline /> */}
      <pre id="mirror" ref={mirror} class={style.mirror}></pre>
    </room>
  );
}
