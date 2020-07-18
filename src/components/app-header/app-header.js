import { h } from "preact";
import cx from "classnames";

import style from "./app-header.less";
export const AppHeader = () => (
  <header class={cx("mdl-layout__header mdl-layout__header", style.Header)}>
    <div class="mdl-layout__header-row">
      <span class="mdl-layout-title">Title</span>
    </div>
  </header>
);
