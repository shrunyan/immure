import { h, Component } from "preact";
import Router from "preact-router";
import { useState } from "preact/hooks";
import cx from "classnames";

import { start } from "../engine";

import Canvas from "../components/cursor-trail";
import { Room } from "../components/room";

import style from "./house.less";
export function House(props, store) {
  console.log("House:render", props, store);

  const [started, setStarted] = useState(false);

  // /** Gets fired when the route changes.
  //  *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
  //  *	@param {string} event.url	The newly routed URL
  //  */
  // handleRoute = (e) => {
  //   this.currentUrl = e.url;
  // };

  return (
    <section class={cx(style.House, started ? style.disorient : null)}>
      {started && <Canvas />}

      <main>
        {!started ? (
          <button
            onClick={() => {
              setStarted(true);
              start();
            }}
          >
            DO NOT CLICK
          </button>
        ) : (
          <Room />
        )}
      </main>

      <div id="notWorthy" class={style.notWorthy}></div>
    </section>
  );
}
