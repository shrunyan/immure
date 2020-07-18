import { h, Component } from "preact";
import Router from "preact-router";
import { useEffect } from "preact/hooks";
import cx from "classnames";

import { start } from "../engine";

import style from "./house.less";
export function House(props, state, store) {
  // /** Gets fired when the route changes.
  //  *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
  //  *	@param {string} event.url	The newly routed URL
  //  */
  // handleRoute = (e) => {
  //   this.currentUrl = e.url;
  // };

  // useEffect(() => {
  //   start();
  // }, []);

  console.log("House:render", props, state, store);
  return (
    <section class={cx(style.House)}>
      <main>
        <button onClick={start}>Enter at your own risk</button>
      </main>
    </section>
  );
}
