import babel from "rollup-plugin-babel";
import postcss from "rollup-plugin-postcss";
import cjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import copy from "rollup-plugin-copy";
import replace from "rollup-plugin-replace";
import { sizeSnapshot } from "rollup-plugin-size-snapshot";
import { terser } from "rollup-plugin-terser";

console.log("Rollup ENV", process.env.NODE_ENV);

module.exports = {
  input: "src/index.js",
  output: {
    file: "build/app.js",
    format: "iife"
  },
  plugins: [
    replace({
      "process.env.NODE_ENV": JSON.stringify(
        process.env.NODE_ENV || "production"
      )
    }),
    babel(),
    resolve({
      // mainField: ["main", "module", "browser"]
    }),
    cjs({}),
    postcss({
      // plugins: [],
      // extensions: [".less"],
      extract: true,
      modules: true
    }),
    copy({
      targets: [
        {src: "src/static/index.html", dest: "build"},
        {src: "src/static/sw.js", dest: "build"},
        {src: "src/static/manifest.json", dest: "build"},
        {src: "src/static/images", dest: "build/images"}
      ]
    }),

    sizeSnapshot(),
    process.env.NODE_ENV === "production" ? terser({}) : null
  ]
};
