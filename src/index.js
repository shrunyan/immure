import { h, render } from "preact";
import { Provider } from "unistore/preact";

import store from "./store";
import { House } from "./house";

render(
  <Provider store={store}>
    <House />
  </Provider>,
  document.body
);
