import { h } from "preact";

export const AppNav = () => (
  <nav class="mdl-navigation">
    <a class="mdl-navigation__link" href="/">
      Home
    </a>
    <a class="mdl-navigation__link" href="/posts/test">
      Posts
    </a>
    <a class="mdl-navigation__link" href="/about">
      About
    </a>
    <a class="mdl-navigation__link" href="/login">
      Login
    </a>
  </nav>
);
