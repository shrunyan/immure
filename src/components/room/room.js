import { h, Component } from "preact";
import Router from "preact-router";
import { useState } from "preact/hooks";
import cx from "classnames";

import style from "./room.less";
export function Room(props, store) {
  console.log("Room:render", props, store);

  return (
    <room class={cx(style.Room)}>
      <h1>NO ESCAPE</h1>
    </room>
  );
}
