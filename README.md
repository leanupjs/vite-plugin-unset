# Vite Plugin Unset

With this plugin configuration options can be removed again.

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
