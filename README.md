# Vite Plugin Unset

With this plugin configuration options can be removed again.

## Motivation

In some cases it can happen that an inaccessible configuration has to be reset. Similar to the approach with CSS, you can use **vite-plugin-unset** to set configuration options to `undefined`, i.e. `unset`.

An example of this is the `jsxInject` configuration for **Preact**. The `jsxInject` approach is possible, but not all bundlers support it equally. So the implementation depends on the bundler.

## Installation

```bash
npm i -D vite-plugin-unset
```

## Usage

```js
import preact from "@preact/preset-vite";
import { unsetConfigPlugin } from "vite-plugin-unset";

config = mergeConfig(config, {
  plugins: [
    preact(),
    unsetConfigPlugin({
      esbuild: {
        jsxInject: undefined,
      },
    }),
  ],
});
```
